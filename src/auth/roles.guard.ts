import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Controller ýa-da Route derejesinde kesgitlenen rollary okaýarys
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Eger salgy (route) hiç hili rol talap etmeýän bolsa (hemmelere açyk bolsa), göni rugsat berýäris
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // 2. HTTP zaprosyň içinden (JwtStrategy tarapyndan goýlan) ulanyjyny okaýarys
    const { user } = context.switchToHttp().getRequest<{
      user: { id: string; email: string; role: Role };
    }>();

    // Ulanyjy ýok bolsa ýa-da roly kesgitlenmedik bolsa, göni daryndyrýarys
    if (!user || !user.role) {
      return false;
    }

    // 3. Ulanyjynyň roly talap edilýän rollaryň içinde barmy diýip barlap yzyna ugratýarys
    return requiredRoles.includes(user.role);
  }
}

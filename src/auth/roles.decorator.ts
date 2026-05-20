import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

// Senior Çözgüt: Gatlaklara haýsy rollaryň girip biljekdigini bellemek üçin decorator
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

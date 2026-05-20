import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// Passport-yň taýyn AuthGuard klasyny 'jwt' açary bilen giňeltýäris
export class JwtAuthGuard extends AuthGuard('jwt') {}

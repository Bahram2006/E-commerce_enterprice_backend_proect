import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // Senior Çözgüt: JWT motoryny hasaba alýarys we durnukly sazlaýarys
    JwtModule.register({
      global: true, // Ähli modullarda elýeterli bolar ýaly global edýäris
      secret: process.env.JWT_SECRET || 'super-secret-senior-key-2026',
      signOptions: { expiresIn: '1d' }, // Tokeniň ömri 1 gün (Enterprise standart)
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}

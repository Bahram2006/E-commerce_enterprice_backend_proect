import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Dogry e-mail salgysyny ýazyň' })
  @IsNotEmpty({ message: 'E-mail meýdany boş bolup bilmez' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Parol meýdany boş bolup bilmez' })
  @MinLength(6, { message: 'Parol iň az 6 simwol bolmalydyr' })
  password!: string;

  @IsString()
  @IsNotEmpty({ message: 'Adyňyz meýdany boş bolup bilmez' })
  firstName!: string;

  @IsString()
  @IsNotEmpty({ message: 'Familiýaňyz meýdany boş bolup bilmez' })
  lastName!: string;
}

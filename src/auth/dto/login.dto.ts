import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Dogry e-mail salgysy giriziň' })
  @IsNotEmpty({ message: 'E-mail meýdany boş bolup bilmez' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Parol meýdany boş bolup bilmez' })
  @MinLength(6, { message: 'Parol iň az 6 simwol bolmalydyr' })
  password!: string;
}

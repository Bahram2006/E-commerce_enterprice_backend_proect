import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'Kategoriýa ady boş bolup bilmez' })
  @MinLength(3, { message: 'Kategoriýa ady iň az 3 simwol bolmalydyr' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'Slug meýdany boş bolup bilmez' })
  slug!: string;
}

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional()
  fullname: string;

  @ApiPropertyOptional()
  gender: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  location: string;

  @ApiPropertyOptional()
  dietary: Array<string>;

  @ApiPropertyOptional()
  favorites: Array<string>;
}

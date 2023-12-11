import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  dietary: Array<string>;

  @ApiProperty()
  favorites: Array<string>;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  desc: string;
  
  @ApiProperty()
  star: number;
  
  @ApiProperty()
  time: number;
  
  @ApiProperty()
  calo: number;
  
  @ApiProperty()
  ingredients: Array<string>;
  
  @ApiProperty()
  steps: Array<string>;
}

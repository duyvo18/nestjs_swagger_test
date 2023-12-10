import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateRecipeDto {
  @ApiPropertyOptional()
  name: string;
  
  @ApiPropertyOptional()
  desc: string;
  
  @ApiPropertyOptional()
  star: number;
  
  @ApiPropertyOptional()
  time: number;
  
  @ApiPropertyOptional()
  calo: number;
  
  @ApiPropertyOptional()
  ingredients: Array<string>;
  
  @ApiPropertyOptional()
  steps: Array<string>;
}

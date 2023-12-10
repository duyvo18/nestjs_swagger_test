import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.interface';
import { CreateRecipeDto } from './create-recipe-dto';
import { UpdateRecipeDto } from './update-recipe-dto';

@Controller('recipes')
export class RecipesController {
  constructor(private _recipesService: RecipesService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<void> {
    await this._recipesService.create(createRecipeDto);
  }

  @Post(':id')
  async update(
    @Param() id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ): Promise<void> {
    await this._recipesService.update(id, updateRecipeDto);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return await this._recipesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    return await this._recipesService.find(id);
  }
}

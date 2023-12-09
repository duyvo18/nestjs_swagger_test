import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Get()
  findAll(): string {
    return 'Returns all recipes.';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Returns ${id} recipe.`;
  }

  @Post(':recipe')
  create(@Param('recipe') recipe: any): string {
    console.log(recipe);
    return 'Create new recipe.';
  }
}

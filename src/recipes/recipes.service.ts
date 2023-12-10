import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.interface';
import { CreateRecipeDto } from './create-recipe-dto';
import { UpdateRecipeDto } from './update-recipe-dto';

@Injectable()
export class RecipesService {
  private readonly _recipes: Array<Recipe> = [];

  async create(createRecipeDto: CreateRecipeDto): Promise<void> {
    var createRecipe = createRecipeDto as Recipe;
    createRecipe.id = this._recipes.length.toString();
    this._recipes.push(createRecipe);
  }

  async update(id: string, recipeUpdateDto: UpdateRecipeDto): Promise<void> {
    var recipe: Recipe = this._recipes.find((elem) => elem.id == id);

    recipe.name = recipeUpdateDto.name ?? recipe.name;
    recipe.desc = recipeUpdateDto.desc ?? recipe.desc;
    recipe.star = recipeUpdateDto.star ?? recipe.star;
    recipe.time = recipeUpdateDto.time ?? recipe.time;
    recipe.calo = recipeUpdateDto.calo ?? recipe.calo;
    recipe.ingredients = recipeUpdateDto.ingredients ?? recipe.ingredients;
    recipe.steps = recipeUpdateDto.steps ?? recipe.steps;
  }

  async find(id: string): Promise<Recipe> {
    return this._recipes.find((elem) => elem.id == id);
  }

  async findAll(): Promise<Array<Recipe>> {
    return this._recipes;
  }
}

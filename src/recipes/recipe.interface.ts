export interface Recipe {
  id: string;
  name: string;
  desc: string;
  star: number;
  time: number;
  calo: number;
  ingredients: Array<string>;
  steps: Array<string>;
}

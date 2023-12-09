export interface Recipe {
    id: string,
    name: string,
    desc: string,
    star: number,
    time: number,
    calo: number,
    ingredients: Array<string>,
    steps: Array<Step>,
}

export interface Ingredient {
    name: string,
    amount: string,
    note: string,
}

export interface Step {
    index: number,
    instruction: string,
}
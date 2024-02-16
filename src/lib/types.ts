export interface IResult {
    id: number;
    name: string;
    description: string;
    
    steps: IStep[];
}

export interface IStep {
    name: string;
    description: string;
}

export interface IIngredient {
    name: string;
    amount: number | string;
    unit: string;
}

export interface IDirection {
    description: string;
}

export interface IOption{
    name: string;
    icon: string;
}

export interface Variation {
    id: string;
    recipe: string;
    title: string;
    description: string;
  }
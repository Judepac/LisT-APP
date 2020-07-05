import { Evaluation } from './evaluation';
import { SousCategorie } from './sous-categorie';

export class Product {
  public id: number;
  public name: string;
  public auteur?: string;
  public year?: number;
  public evaluations?: Evaluation[];
  public sousCategories?: SousCategorie[];

  constructor(input?: Product) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

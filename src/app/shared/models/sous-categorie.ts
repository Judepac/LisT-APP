import { Product } from './product';
import { Categorie } from './categorie';

export class SousCategorie {

  public id: number;
  public name: string;
  public categories: Categorie[];
  public sousCategories?: SousCategorie[];
  public products: Product[];

  constructor(input?: SousCategorie) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

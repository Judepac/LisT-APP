import { SousCategorie } from './sous-categorie';
import { User } from './user';

export class Categorie {

  public id: number;
  public name: string;
  public users: User[];
  public sousCategories?: SousCategorie[];

  constructor(input?: Categorie) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

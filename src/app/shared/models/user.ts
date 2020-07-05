import { Evaluation } from './evaluation';
import { Categorie } from './categorie';

export class User {

  public id: number;
  public firstname: string;
  public lastname: string;
  public nickname?: string;
  public birthday: Date;
  public email: string;
  public password: string;
  public evaluations?: Evaluation[];
  public categories?: Categorie[];

  constructor(input?: User) {
    if (input) {
      Object.assign(this, input);
    }
  }

}

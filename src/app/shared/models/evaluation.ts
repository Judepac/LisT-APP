import { User } from './user';
import { Product } from './product';

export class Evaluation {
  public id: number;
  public commentaire?: string;
  public like: boolean;
  public rate?: number;
  public product: Product;
  public user: User;

  constructor(input?: Evaluation) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

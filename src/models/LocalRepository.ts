import { Repository } from "./Repository";
import { Category } from "./Category";

export interface LocalRepository extends Repository {
  category: Category;
}

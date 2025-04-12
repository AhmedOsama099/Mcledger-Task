import { IUIAuthors } from "./authorsModel";
import { IUIGenres } from "./genresModel";

export interface ICard {
  type: "Genre" | "Author";
  data: IUIGenres | IUIAuthors;
  image: string;
}

import { IUIAlbums } from "./albumsModel";
import { IUISingers } from "./singersModel";

export interface IMusicCard {
  type: "Genre" | "Author";
  data: IUISingers | IUIAlbums;
  image: string;
}

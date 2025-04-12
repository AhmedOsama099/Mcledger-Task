import { IUIAlbums } from "./albumsModel";
import { IUISingers } from "./singersModel";

export interface IMuiscCard {
  type: "Genre" | "Album";
  data: IUISingers | IUIAlbums;
  image: string;
}

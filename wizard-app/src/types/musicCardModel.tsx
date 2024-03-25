import { IUIAlbums } from "./albumsModel";
import { IUISingers } from "./singersModel";

export interface IMuiscCard {
  type: "Singer" | "Album";
  data: IUISingers | IUIAlbums;
  image: string;
}

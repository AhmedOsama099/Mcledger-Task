import { IUISingers } from "./singersModel";

export interface IMuiscCard {
  type: "Singer" | "Album";
  data: IUISingers;
  image: string;
}

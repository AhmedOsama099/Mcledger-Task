import { IServerAlbums } from "../../types/albumsModel";
import albumsData from "../entities/authorsDB.json";

const authors: IServerAlbums[] = [...albumsData];

async function readAlbumsBySingersIds(
  singerIdsArr: string[]
): Promise<IServerAlbums[] | undefined> {
  return authors.filter((author) => singerIdsArr.includes(author.singerId));
}

export { readAlbumsBySingersIds };

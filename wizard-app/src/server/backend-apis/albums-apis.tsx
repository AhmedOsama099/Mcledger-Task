import { IServerAlbums } from "../../types/albumsModel";
import albumsData from "../entities/albumsDB.json";

const albums: IServerAlbums[] = [...albumsData];

async function readAlbumsBySingersIds(
  singerIdsArr: string[]
): Promise<IServerAlbums[] | undefined> {
  return albums.filter((album) => singerIdsArr.includes(album.singerId));
}

export { readAlbumsBySingersIds };

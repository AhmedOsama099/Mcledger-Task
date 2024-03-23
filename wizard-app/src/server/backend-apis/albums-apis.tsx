import albumsData from "../entities/albumsDB.json";

export interface IAlbums {
  id: string;
  singerId: string;
  name: string;
  songsCount: number;
  amount: number;
}

const albums: IAlbums[] = [...albumsData];

async function readAlbumsBySingersIds(
  singerIdsArr: string[]
): Promise<IAlbums[] | undefined> {
  return albums.filter((album) => singerIdsArr.includes(album.singerId));
}

export { readAlbumsBySingersIds };

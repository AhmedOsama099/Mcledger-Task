import songsData from "../entities/songsDB.json";

export interface ISongs {
  id: string;
  singerId: string;
  albumId: string;
  name: string;
  description: string;
  amount: number;
}

const songs: ISongs[] = [...songsData];

async function readSongsByAlbumsIds(
  albumIdsArr: string[]
): Promise<ISongs[] | undefined> {
  return songs.filter((song) => albumIdsArr.includes(song.albumId));
}

export { readSongsByAlbumsIds };

import { IServerSongs } from "../../types/songsModel";
import songsData from "../entities/songsDB.json";

const songs: IServerSongs[] = [...songsData];

async function readSongsByAlbumsIds(
  albumIdsArr: string[]
): Promise<IServerSongs[] | undefined> {
  return songs.filter((song) => albumIdsArr.includes(song.albumId));
}

export { readSongsByAlbumsIds };

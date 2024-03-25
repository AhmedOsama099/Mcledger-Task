import { IServerSongs, IServerSongsList } from "../../types/songsModel";
import songsData from "../entities/songsDB.json";
import albumsData from "../entities/albumsDB.json";

const songs: IServerSongs[] = [...songsData];

async function readSongsByAlbumsIds(
  albumIdsArr: string[]
): Promise<IServerSongsList[] | undefined> {
  const rturnData: IServerSongsList[] = [];

  albumsData
    .filter((ele) => albumIdsArr.includes(ele.id))
    .map((ele) => {
      rturnData.push({
        albumTitle: ele.name,
        albumDescription: ele.description,
        data: songs.filter((song) => ele.id === song.albumId),
      });
    });

  return rturnData;
}

export { readSongsByAlbumsIds };

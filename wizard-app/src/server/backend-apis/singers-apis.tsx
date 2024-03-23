import singersData from "../entities/singersDB.json";

export interface ISingers {
  id: string;
  name: string;
  albumsCount: number;
  songsCount: number;
  amount: number;
}

const singers: ISingers[] = [...singersData];

async function readAllSingers(): Promise<ISingers[]> {
  return singers;
}

export { readAllSingers };

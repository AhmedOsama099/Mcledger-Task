import { IServerSingers } from "../../types/singersModel";
import singersData from "../entities/singersDB.json";

const genres: IServerSingers[] = [...singersData];

async function readAllSingers(): Promise<IServerSingers[]> {
  return genres;
}

export { readAllSingers };

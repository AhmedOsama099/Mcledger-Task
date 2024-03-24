import { IServerSingers } from "../../types/singersModel";
import singersData from "../entities/singersDB.json";

const singers: IServerSingers[] = [...singersData];

async function readAllSingers(): Promise<IServerSingers[]> {
  return singers;
}

export { readAllSingers };

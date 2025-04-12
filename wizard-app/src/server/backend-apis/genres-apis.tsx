import { IServerGenres } from "../../types/genresModel";
import genresData from "../entities/genresDB.json";

const genres: IServerGenres[] = [...genresData];

async function readAllGenres(): Promise<IServerGenres[]> {
  return genres;
}

export { readAllGenres };

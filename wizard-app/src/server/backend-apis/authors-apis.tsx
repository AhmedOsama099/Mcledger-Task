import { IServerAuthors } from "../../types/authorsModel";
import authorsData from "../entities/authorsDB.json";

const authors: IServerAuthors[] = [...authorsData];

async function readAuthorsByGenresIds(
  genreIdsArr: string[]
): Promise<IServerAuthors[] | undefined> {
  return authors.filter((author) => genreIdsArr.includes(author.genreId));
}

export { readAuthorsByGenresIds };

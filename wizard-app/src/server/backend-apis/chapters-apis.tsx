import {
  IServerChapters,
  IServerChaptersList,
} from "../../types/chaptersModel";
import genresData from "../entities/genresDB.json";
import authorsData from "../entities/authorsDB.json";

const chapters: IServerChapters[] = [...genresData];

async function readChaptersByAuthorsIds(
  albumIdsArr: string[]
): Promise<IServerChaptersList[] | undefined> {
  const rturnData: IServerChaptersList[] = [];

  authorsData
    .filter((ele) => albumIdsArr.includes(ele.id))
    .map((ele) => {
      rturnData.push({
        authorTitle: ele.name,
        authorDescription: ele.description,
        data: chapters.filter((chapter) => ele.id === chapter.authorId),
      });
    });

  return rturnData;
}

export { readChaptersByAuthorsIds };

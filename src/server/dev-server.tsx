import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import * as genresDB from "./backend-apis/genres-apis";
import * as authorsDB from "./backend-apis/authors-apis";
import * as chaptersDB from "./backend-apis/chapters-apis";
import { GenericTextUtils } from "../utils/GeneralText";

export const worker = setupWorker(
  // Get all genres
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.getAllGenresUrl}`,
    async () => {
      const genres = await genresDB.readAllGenres();
      return HttpResponse.json(genres);
    }
  ),
  // Get authors by genre ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.albumUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const authors = await authorsDB.readAuthorsByGenresIds(id as string[]);
      return HttpResponse.json(authors);
    }
  ),
  // Get chapters by author ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.chapterUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const chapters = await chaptersDB.readChaptersByAuthorsIds(
        id as string[]
      );
      return HttpResponse.json(chapters);
    }
  )
);

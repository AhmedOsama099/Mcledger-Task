import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import * as singersDB from "./backend-apis/genres-apis";
import * as authorsDB from "./backend-apis/authors-apis";
import * as songsDB from "./backend-apis/songs-apis";
import { GenericTextUtils } from "../utils/GeneralText";

export const worker = setupWorker(
  // Get all genres
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.getAllSingersUrl}`,
    async () => {
      const genres = await singersDB.readAllSingers();
      return HttpResponse.json(genres);
    }
  ),
  // Get authors by genre ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.albumUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const authors = await authorsDB.readAlbumsBySingersIds(id as string[]);
      return HttpResponse.json(authors);
    }
  ),
  // Get songs by author ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.songUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const songs = await songsDB.readSongsByAlbumsIds(id as string[]);
      return HttpResponse.json(songs);
    }
  )
);

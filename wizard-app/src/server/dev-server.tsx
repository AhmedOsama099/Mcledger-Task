import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import * as singersDB from "./backend-apis/singers-apis";
import * as albumsDB from "./backend-apis/albums-apis";
import * as songsDB from "./backend-apis/songs-apis";
import { GenericTextUtils } from "../utils/GeneralText";

export const worker = setupWorker(
  // Get all singers
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.getAllSingersUrl}`,
    async () => {
      const singers = await singersDB.readAllSingers();
      return HttpResponse.json(singers);
    }
  ),
  // Get albums by singer ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.albumUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const albums = await albumsDB.readAlbumsBySingersIds(id as string[]);
      return HttpResponse.json(albums);
    }
  ),
  // Get songs by album ids
  http.get(
    `${GenericTextUtils.baseUrl}${GenericTextUtils.songUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const songs = await songsDB.readSongsByAlbumsIds(id as string[]);
      return HttpResponse.json(songs);
    }
  )
);

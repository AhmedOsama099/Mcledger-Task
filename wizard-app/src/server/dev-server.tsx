import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import { GenerixTextUtils } from "../utils/GeneralText";
import * as singersDB from "./backend-apis/singers-apis";
import * as albumsDB from "./backend-apis/albums-apis";
import * as songsDB from "./backend-apis/songs-apis";

export const worker = setupWorker(
  // Get all singers
  http.get(
    `${GenerixTextUtils.baseUrl}${GenerixTextUtils.singersUrl}/all`,
    async () => {
      const singers = await singersDB.readAllSingers();
      return HttpResponse.json({ singers: singers });
    }
  ),
  // Get albums by singer ids
  http.get(
    `${GenerixTextUtils.baseUrl}${GenerixTextUtils.albumUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const albums = await albumsDB.readAlbumsBySingersIds(id as string[]);
      return HttpResponse.json({ albums: albums });
    }
  ),
  // Get songs by album ids
  http.get(
    `${GenerixTextUtils.baseUrl}${GenerixTextUtils.songUrl}/:id`,
    async ({ params }) => {
      const { id } = params;
      const songs = await songsDB.readSongsByAlbumsIds(id as string[]);
      return HttpResponse.json({ songs: songs });
    }
  )
);

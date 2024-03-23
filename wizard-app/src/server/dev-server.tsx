import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import * as singersDB from "./backend-apis/singers-apis";
import * as albumsDB from "./backend-apis/albums-apis";
import * as songsDB from "./backend-apis/songs-apis";

const apiUrl = "https:tunes";

export const worker = setupWorker(
  // Get all singers
  http.get(`${apiUrl}/singers/all`, async () => {
    const singers = await singersDB.readAllSingers();
    return HttpResponse.json({ singers: singers });
  }),
  // Get albums by singer ids
  http.get(`${apiUrl}/album/:id`, async ({ params }) => {
    const { id } = params;
    const albums = await albumsDB.readAlbumsBySingersIds(id as string[]);
    return HttpResponse.json({ albums: albums });
  }),
  // Get songs by album ids
  http.get(`${apiUrl}/song/:id`, async ({ params }) => {
    const { id } = params;
    const songs = await songsDB.readSongsByAlbumsIds(id as string[]);
    return HttpResponse.json({ songs: songs });
  })
);

import {
  handleConvertAlbumsData,
  handleConvertSingersData,
  handleConvertSongsData,
  handleNewAbortSignal,
} from "../utils/generalHelper";
import { GenerixTextUtils } from "../utils/generalText";
import api from "./api";

export const handleGetAllSingers = async () => {
  const response = await api.get(GenerixTextUtils.getAllSingersUrl, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertSingersData(response.data);
};

export const handleGetAlbumsByIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenerixTextUtils.albumUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertAlbumsData(response.data);
};

export const handleGetSongsByAlbumsIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenerixTextUtils.songUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertSongsData(response.data);
};

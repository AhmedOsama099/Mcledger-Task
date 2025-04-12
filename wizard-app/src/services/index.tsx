import {
  handleConvertAlbumsData,
  handleConvertSingersData,
  handleConvertSongsData,
  handleNewAbortSignal,
} from "../utils/generalHelper";
import { GenericTextUtils } from "../utils/GeneralText";
import api from "./api";

export const handleGetAllSingers = async () => {
  const response = await api.get(GenericTextUtils.getAllSingersUrl, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertSingersData(response.data);
};

export const handleGetAlbumsByIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenericTextUtils.albumUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertAlbumsData(response.data);
};

export const handleGetSongsByAlbumsIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenericTextUtils.songUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertSongsData(response.data);
};

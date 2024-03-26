import {
  handleConvertAlbumsData,
  handleConvertSingersData,
  handleConvertSongsData,
  handleNewAbortSignal,
} from "../utils/generalHelper";
import { GenerixTextUtils } from "../utils/generalText";
import api from "./api";

export const handleGetAllSingers = async () => {
  try {
    const response = await api.get(GenerixTextUtils.getAllSingersUrl, {
      signal: handleNewAbortSignal(5000), //Aborts request after 5 second
    });
    return handleConvertSingersData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

export const handleGetAlbumsByIds = async (idsArr: string[]) => {
  try {
    const response = await api.get(`${GenerixTextUtils.albumUrl}/${idsArr}`, {
      signal: handleNewAbortSignal(5000), //Aborts request after 5 second
    });
    return handleConvertAlbumsData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

export const handleGetSongsByAlbumsIds = async (idsArr: string[]) => {
  try {
    const response = await api.get(`${GenerixTextUtils.songUrl}/${idsArr}`, {
      signal: handleNewAbortSignal(5000), //Aborts request after 5 second
    });
    return handleConvertSongsData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

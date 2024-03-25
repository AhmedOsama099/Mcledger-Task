import {
  handleConvertAlbumsData,
  handleConvertSingersData,
  handleConvertSongsData,
} from "../utils/generalHelper";
import { GenerixTextUtils } from "../utils/generalText";
import api from "./api";

export const handleGetAllSingers = async () => {
  try {
    const response = await api.get(GenerixTextUtils.getAllSingersUrl);
    return handleConvertSingersData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

export const handleGetAlbumsByIds = async (idsArr: string[]) => {
  try {
    const response = await api.get(`${GenerixTextUtils.albumUrl}/${idsArr}`);
    return handleConvertAlbumsData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

export const handleGetSongsByAlbumsIds = async (idsArr: string[]) => {
  try {
    const response = await api.get(`${GenerixTextUtils.songUrl}/${idsArr}`);
    return handleConvertSongsData(response.data);
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

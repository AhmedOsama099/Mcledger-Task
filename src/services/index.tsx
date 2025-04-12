import {
  handleConvertAuthorsData,
  handleConvertGenresData,
  handleConvertChaptersData,
  handleNewAbortSignal,
} from "../utils/generalHelper";
import { GenericTextUtils } from "../utils/GeneralText";
import api from "./api";

export const handleGetAllGenres = async () => {
  const response = await api.get(GenericTextUtils.getAllGenresUrl, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertGenresData(response.data);
};

export const handleGetAuthorsByIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenericTextUtils.albumUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertAuthorsData(response.data);
};

export const handleGetChaptersByAuthorsIds = async (idsArr: string[]) => {
  const response = await api.get(`${GenericTextUtils.chapterUrl}/${idsArr}`, {
    signal: handleNewAbortSignal(5000), //Aborts request after 5 second
  });
  return handleConvertChaptersData(response.data);
};

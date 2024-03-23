import { GenerixTextUtils } from "../utils/GeneralText";
import api from "./api";

export const handleGetAllSingers = async () => {
  try {
    const response = await api.get(GenerixTextUtils.singersUrl);
    return response.data;
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
};

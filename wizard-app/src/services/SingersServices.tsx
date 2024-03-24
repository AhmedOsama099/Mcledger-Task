import { handleConvertSingersData } from "../utils/helper";
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

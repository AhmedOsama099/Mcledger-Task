import { handleConvertSingersData } from "../utils/helper";
import { GenerixTextUtils } from "../utils/generalText";
import api from "./api";
import { IAPIReturn } from "../types/generalModel";
import { IUISingers } from "../types/singersModel";

export const handleGetAllSingers = async () => {
  try {
    const response = await api.get(GenerixTextUtils.getAllSingersUrl);
    const dataArr = handleConvertSingersData(response.data);
    const returnObj: IAPIReturn<IUISingers[]> = {
      data: dataArr,
      error: "",
    };

    return returnObj;
  } catch (error) {
    const returnObj: IAPIReturn<IUISingers[]> = {
      data: null,
      error: `Error fetching data: ${error}`,
    };
    return returnObj;
  }
};

import { IUISingers } from "../types/singersModel";
import { useState } from "react";
export const handleConvertSingersData = (data: any[]) => {
  const returnData: IUISingers[] = [];
  data.map((ele) =>
    returnData.push({
      albumsCount: ele.albumsCount,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      songsCount: ele.songsCount,
      isselected: false,
    })
  );

  return returnData;
};

export const useHandleTogleAlert = (isOpen: boolean) => {
  const [isAlertOpen, setIsAlertOpen] = useState(isOpen);

  const handleCloseAlert = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertOpen(false);
  };

  return { isAlertOpen, handleCloseAlert };
};

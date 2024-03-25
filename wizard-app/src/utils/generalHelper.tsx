import { useEffect } from "react";
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
      isSelected: false,
    })
  );

  return returnData;
};

export const useHandleTogleAlert = (
  isOpen: boolean,
  handleClearErrorState: () => void
) => {
  const [isAlertOpen, setIsAlertOpen] = useState(isOpen);

  useEffect(() => {
    setIsAlertOpen(isOpen);
  }, [isOpen]);

  const handleCloseAlert = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertOpen(false);
    handleClearErrorState();
  };

  return { isAlertOpen, handleCloseAlert };
};

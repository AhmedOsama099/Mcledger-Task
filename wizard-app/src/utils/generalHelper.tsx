import { useEffect } from "react";
import { IUISingers } from "../types/singersModel";
import { useState } from "react";
import { IUIAlbums } from "../types/albumsModel";
import { IUISongs } from "../types/songsModel";
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
export const handleConvertAlbumsData = (data: any[]) => {
  const returnData: IUIAlbums[] = [];
  data.map((ele) =>
    returnData.push({
      description: ele.description,
      singerId: ele.singerId,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      songsCount: ele.songsCount,
      isSelected: false,
    })
  );

  return returnData;
};
export const handleConvertSongsData = (data: any[]) => {
  const returnData: IUISongs[] = [];
  data.map((ele) =>
    returnData.push({
      description: ele.description,
      singerId: ele.singerId,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      albumId: ele.albumId,
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

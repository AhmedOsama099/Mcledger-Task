import { useEffect } from "react";
import { IUISingers } from "../types/singersModel";
import { useState } from "react";
import { IUIAlbums } from "../types/albumsModel";
import { IServerSongsList, IUISongsList } from "../types/songsModel";
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
export const handleConvertSongsData = (data: IServerSongsList[]) => {
  const returnData: IUISongsList[] = [];
  data.map((ele) =>
    returnData.push({
      albumTitle: ele.albumTitle,
      albumDescription: ele.albumDescription,
      data: ele.data.map((ele1) => ({
        description: ele1.description,
        singerId: ele1.singerId,
        amount: ele1.amount,
        id: ele1.id,
        name: ele1.name,
        albumId: ele1.albumId,
        isSelected: false,
      })),
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

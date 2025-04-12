import { useEffect } from "react";
import { IUIGenres } from "../types/genresModel";
import { useState } from "react";
import { IUIAuthors } from "../types/authorsModel";
import { IServerChaptersList, IUIChaptersList } from "../types/chaptersModel";

export const handleConvertGenresData = (data: any[]) => {
  const returnData: IUIGenres[] = [];
  data.map((ele) =>
    returnData.push({
      authorCount: ele.authorCount,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      chaptersCount: ele.chaptersCount,
      isSelected: false,
    })
  );

  return returnData;
};
export const handleConvertAuthorsData = (data: any[]) => {
  const returnData: IUIAuthors[] = [];
  data.map((ele) =>
    returnData.push({
      description: ele.description,
      genreId: ele.genreId,
      amount: ele.amount,
      id: ele.id,
      name: ele.name,
      chaptersCount: ele.chaptersCount,
      isSelected: false,
    })
  );

  return returnData;
};
export const handleConvertChaptersData = (data: IServerChaptersList[]) => {
  const returnData: IUIChaptersList[] = [];
  data.map((ele) =>
    returnData.push({
      authorTitle: ele.authorTitle,
      authorDescription: ele.authorDescription,
      data: ele.data.map((ele1) => ({
        description: ele1.description,
        genreId: ele1.genreId,
        amount: ele1.amount,
        id: ele1.id,
        name: ele1.name,
        authorId: ele1.authorId,
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

export const handleNewAbortSignal = (timeOut: number) => {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeOut || 0);

  return abortController.signal;
};

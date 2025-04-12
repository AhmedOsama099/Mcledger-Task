import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { handleDetailsValues } from "../features/detailsSlice";
import { handlePreviousAuthorsData } from "../features/authorsSlice";
import { fetchChapters } from "../features/chaptersSlice";
import { IUIChapters } from "../types/chaptersModel";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3FormData = () => {
  const dispatch = useAppDispatch();
  const chapters = useAppSelector((state) => state.chapters);
  const selectedAuthors = useAppSelector((state) => state.authors.selectedData);
  const prevSelectedAuthors = useAppSelector((state) => state.authors.prevData);
  useEffect(() => {
    if (
      chapters.error.length === 0 &&
      JSON.stringify(selectedAuthors) !== JSON.stringify(prevSelectedAuthors)
    ) {
      dispatch(fetchChapters(selectedAuthors));
      dispatch(handlePreviousAuthorsData({ value: selectedAuthors }));
    }
  }, [
    dispatch,
    chapters.data,
    chapters.error,
    selectedAuthors,
    prevSelectedAuthors,
  ]);

  return {
    chaptersData: chapters.data,
    errorMessage: chapters.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedChapters = useAppSelector(
    (state) => state.chapters.selectedData
  );
  const chapters = useAppSelector((state) => state.chapters.data);
  useEffect(() => {
    const chaptersArr: IUIChapters[] = [];

    chapters.filter((ele) => {
      const arr = ele.data
        ? ele.data.filter((ele1) => selectedChapters.includes(ele1.id))
        : [];
      chaptersArr.push(...arr);
    });

    const { chaptersTotal, amountTotal } = chaptersArr.reduce(
      (p, c) => {
        p.chaptersTotal += 1;
        p.amountTotal += c.amount;
        return p;
      },
      { chaptersTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ chaptersTotal, amountTotal }));
  }, [chapters, selectedChapters, dispatch]);
};

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchAuthors } from "../features/authorsSlice";
import { handlePreviousGenresData } from "../features/genresSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2FormData = () => {
  const dispatch = useAppDispatch();
  const authors = useAppSelector((state) => state.authors);
  const selectedGenres = useAppSelector((state) => state.genres.selectedData);
  const prevSelectedGenres = useAppSelector((state) => state.genres.prevData);

  useEffect(() => {
    if (
      authors.error.length === 0 &&
      JSON.stringify(selectedGenres) !== JSON.stringify(prevSelectedGenres)
    ) {
      dispatch(fetchAuthors(selectedGenres));
      dispatch(handlePreviousGenresData({ value: selectedGenres }));
    }
  }, [
    dispatch,
    authors.data,
    authors.error,
    selectedGenres,
    prevSelectedGenres,
  ]);

  return {
    authorsData: authors.data,
    errorMessage: authors.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedAuthors = useAppSelector((state) => state.authors.selectedData);
  const authors = useAppSelector((state) => state.authors.data);

  useEffect(() => {
    const data = authors.filter((ele) => selectedAuthors.includes(ele.id));
    const { chaptersTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.chaptersTotal += c.chaptersCount;
        p.amountTotal += c.amount;
        return p;
      },
      { chaptersTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ chaptersTotal, amountTotal }));
  }, [authors, selectedAuthors, dispatch]);
};

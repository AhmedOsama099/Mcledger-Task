import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchGenres } from "../features/genresSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1FormData = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres);

  useEffect(() => {
    if (genres.data.length <= 0 && genres.error.length === 0) {
      dispatch(fetchGenres());
    }
  }, [dispatch, genres.data, genres.error]);

  return {
    genresData: genres.data,
    errorMessage: genres.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector((state) => state.genres.selectedData);
  const genres = useAppSelector((state) => state.genres.data);

  useEffect(() => {
    const data = genres.filter((ele) => selectedGenres.includes(ele.id));
    const { chaptersTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.chaptersTotal += c.chaptersCount;
        p.amountTotal += c.amount;
        return p;
      },
      { chaptersTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ chaptersTotal, amountTotal }));
  }, [genres, selectedGenres, dispatch]);
};

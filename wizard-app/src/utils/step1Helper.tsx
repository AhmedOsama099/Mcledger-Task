import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSingers } from "../features/singersSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1FormData = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres);

  useEffect(() => {
    if (genres.data.length <= 0 && genres.error.length === 0) {
      dispatch(fetchSingers());
    }
  }, [dispatch, genres.data, genres.error]);

  return {
    singersData: genres.data,
    errorMessage: genres.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedSingers = useAppSelector((state) => state.genres.selectedData);
  const genres = useAppSelector((state) => state.genres.data);

  useEffect(() => {
    const data = genres.filter((ele) => selectedSingers.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [genres, selectedSingers, dispatch]);
};

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchAlbums } from "../features/albumsSlice";
import { handlePreviousSingersData } from "../features/singersSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2FormData = () => {
  const dispatch = useAppDispatch();
  const authors = useAppSelector((state) => state.authors);
  const selectedSingers = useAppSelector((state) => state.genres.selectedData);
  const prevSelectedSingers = useAppSelector((state) => state.genres.prevData);

  useEffect(() => {
    if (
      authors.error.length === 0 &&
      JSON.stringify(selectedSingers) !== JSON.stringify(prevSelectedSingers)
    ) {
      dispatch(fetchAlbums(selectedSingers));
      dispatch(handlePreviousSingersData({ value: selectedSingers }));
    }
  }, [
    dispatch,
    authors.data,
    authors.error,
    selectedSingers,
    prevSelectedSingers,
  ]);

  return {
    albumsData: authors.data,
    errorMessage: authors.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedAlbums = useAppSelector((state) => state.authors.selectedData);
  const authors = useAppSelector((state) => state.authors.data);

  useEffect(() => {
    const data = authors.filter((ele) => selectedAlbums.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [authors, selectedAlbums, dispatch]);
};

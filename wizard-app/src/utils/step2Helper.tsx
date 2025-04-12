import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchAlbums } from "../features/albumsSlice";
import { handlePreviousSingersData } from "../features/singersSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2FormData = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector((state) => state.albums);
  const selectedSingers = useAppSelector((state) => state.genres.selectedData);
  const prevSelectedSingers = useAppSelector((state) => state.genres.prevData);

  useEffect(() => {
    if (
      albums.error.length === 0 &&
      JSON.stringify(selectedSingers) !== JSON.stringify(prevSelectedSingers)
    ) {
      dispatch(fetchAlbums(selectedSingers));
      dispatch(handlePreviousSingersData({ value: selectedSingers }));
    }
  }, [
    dispatch,
    albums.data,
    albums.error,
    selectedSingers,
    prevSelectedSingers,
  ]);

  return {
    albumsData: albums.data,
    errorMessage: albums.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedAlbums = useAppSelector((state) => state.albums.selectedData);
  const albums = useAppSelector((state) => state.albums.data);

  useEffect(() => {
    const data = albums.filter((ele) => selectedAlbums.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [albums, selectedAlbums, dispatch]);
};

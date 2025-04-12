import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { handleDetailsValues } from "../features/detailsSlice";
import { handlePreviousAlbumsData } from "../features/albumsSlice";
import { fetchSongs } from "../features/songsSlice";
import { IUISongs } from "../types/songsModel";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3FormData = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songs);
  const selectedAlbums = useAppSelector((state) => state.authors.selectedData);
  const prevSelectedAlbums = useAppSelector((state) => state.authors.prevData);
  useEffect(() => {
    if (
      songs.error.length === 0 &&
      JSON.stringify(selectedAlbums) !== JSON.stringify(prevSelectedAlbums)
    ) {
      dispatch(fetchSongs(selectedAlbums));
      dispatch(handlePreviousAlbumsData({ value: selectedAlbums }));
    }
  }, [dispatch, songs.data, songs.error, selectedAlbums, prevSelectedAlbums]);

  return {
    songsData: songs.data,
    errorMessage: songs.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedSongs = useAppSelector((state) => state.songs.selectedData);
  const songs = useAppSelector((state) => state.songs.data);
  useEffect(() => {
    const songsArr: IUISongs[] = [];

    songs.filter((ele) => {
      const arr = ele.data
        ? ele.data.filter((ele1) => selectedSongs.includes(ele1.id))
        : [];
      songsArr.push(...arr);
    });

    const { songsTotal, amountTotal } = songsArr.reduce(
      (p, c) => {
        p.songsTotal += 1;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [songs, selectedSongs, dispatch]);
};

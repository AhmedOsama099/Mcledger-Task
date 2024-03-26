import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSingers } from "../features/singersSlice";
import { handleDetailsValues } from "../features/detailsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1FormData = () => {
  const dispatch = useAppDispatch();
  const singers = useAppSelector((state) => state.singers);

  useEffect(() => {
    if (singers.data.length <= 0 && singers.error.length === 0) {
      dispatch(fetchSingers());
    }
  }, [dispatch, singers.data, singers.error]);

  return {
    singersData: singers.data,
    errorMessage: singers.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedSingers = useAppSelector((state) => state.singers.selectedData);
  const singers = useAppSelector((state) => state.singers.data);

  useEffect(() => {
    const data = singers.filter((ele) => selectedSingers.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [singers, selectedSingers, dispatch]);
};

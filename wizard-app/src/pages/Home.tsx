import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSingers } from "../features/singersSlice";
const Home = () => {
  const data = useAppSelector((state) => state.singers.data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      if (data?.length === 0) {
        dispatch(fetchSingers());
      } else {
        console.log(data);
      }
    })();
  }, [dispatch, data]);

  return <div>Home</div>;
};

export default Home;

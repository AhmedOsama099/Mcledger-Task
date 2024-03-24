import { useEffect } from "react";
import { fetchSingers } from "../../../features/singersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import SingerCard from "./SingerCard";

const Step1 = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.singers.data);

  useEffect(() => {
    dispatch(fetchSingers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        margin: "20px",
        justifyContent: "center",
      }}
    >
      {data.map(() => (
        <SingerCard />
      ))}
    </div>
  );
};

export default Step1;

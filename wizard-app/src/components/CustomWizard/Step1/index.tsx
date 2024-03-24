import { useEffect } from "react";
import { fetchSingers } from "../../../features/singersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import SingerCard from "./SingerCard";
import StepWrapper from "../StepWrapper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Step1 = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.singers.data);

  useEffect(() => {
    dispatch(fetchSingers());
  }, [dispatch]);

  return (
    <StepWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} flex={1}>
          {data.map(() => (
            <Grid display="flex" justifyContent="center" sm={12} md={6} lg={4}>
              <SingerCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StepWrapper>
  );
};

export default Step1;

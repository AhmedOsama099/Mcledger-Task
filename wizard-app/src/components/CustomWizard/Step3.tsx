import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  useHandleStep3FormData,
  useHandleStep3SelectedData,
} from "../../utils/wizardHelper";
import StepWrapper from "./StepWrapper";
import SongsList from "../SongsList";
import { useAppSelector } from "../../store/hooks";

const Step3 = () => {
  const { songsData } = useHandleStep3FormData();
  useHandleStep3SelectedData();
  const details = useAppSelector((state) => state.details);
  console.log("step3", details);

  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            <Grid display="flex" justifyContent="center" sm={12}>
              <SongsList data={songsData} />
            </Grid>
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step3;

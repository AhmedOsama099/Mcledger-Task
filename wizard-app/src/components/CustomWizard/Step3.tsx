import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  useHandleStep3FormData,
  useHandleStep3SelectedData,
} from "../../utils/step3Helper";
import StepWrapper from "./StepWrapper";
import SongsList from "../SongsList";

const Step3 = () => {
  const { songsData } = useHandleStep3FormData();
  useHandleStep3SelectedData();

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

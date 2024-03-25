import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  useHandleStep1FormData,
  useHandleStep1SelectedData,
} from "../../utils/wizardHelper";
import SingerCard from "../MusicCard";
import StepWrapper from "./StepWrapper";
import singerImage from "../../assets/singer-img-001.png";
import { useAppSelector } from "../../store/hooks";

const Step1 = () => {
  const { singersData } = useHandleStep1FormData();
  useHandleStep1SelectedData();
  const details = useAppSelector((state) => state.details);
  console.log(details);
  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            {singersData.map((ele) => (
              <Grid
                key={ele.id}
                display="flex"
                justifyContent="center"
                sm={12}
                md={6}
                lg={4}
              >
                <SingerCard data={ele} image={singerImage} type="Singer" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step1;

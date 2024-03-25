import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { useHandleStep2FormData } from "../../utils/wizardHelper";
import MusicCard from "../MusicCard";
import StepWrapper from "./StepWrapper";
import albumImage from "../../assets/album.png";

const Step2 = () => {
  const { albumsData } = useHandleStep2FormData();

  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            {albumsData?.map((ele) => (
              <Grid
                key={ele.id}
                display="flex"
                justifyContent="center"
                sm={12}
                md={6}
                lg={4}
              >
                <MusicCard data={ele} image={albumImage} type="Album" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step2;

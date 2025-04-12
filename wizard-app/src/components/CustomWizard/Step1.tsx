import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  useHandleStep1FormData,
  useHandleStep1SelectedData,
} from "../../utils/step1Helper";
import GenreCard from "../MusicCard";
import StepWrapper from "./StepWrapper";
import genreImage from "../../assets/genre-img-0011.png";

const Step1 = () => {
  const { genresData } = useHandleStep1FormData();
  useHandleStep1SelectedData();

  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            {genresData.length > 0 &&
              genresData.map((ele) => (
                <Grid
                  key={ele.id}
                  display="flex"
                  justifyContent="center"
                  alignItems={"center"}
                  sm={12}
                  md={6}
                  lg={4}
                >
                  <GenreCard data={ele} image={genreImage} type="Genre" />
                </Grid>
              ))}
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step1;

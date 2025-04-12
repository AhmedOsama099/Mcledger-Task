import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  useHandleStep2FormData,
  useHandleStep2SelectedData,
} from "../../utils/step2Helper";
import Card from "../Card";
import StepWrapper from "./StepWrapper";
import albumImage from "../../assets/author.png";

const Step2 = () => {
  const { authorsData } = useHandleStep2FormData();
  useHandleStep2SelectedData();

  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            {authorsData?.map((ele) => (
              <Grid
                key={ele.id}
                display="flex"
                justifyContent="center"
                sm={12}
                md={6}
                lg={4}
              >
                <Card data={ele} image={albumImage} type="Author" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step2;

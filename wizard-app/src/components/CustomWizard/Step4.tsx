import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import StepWrapper from "./StepWrapper";
import { TextField } from "@mui/material";

const Step4 = () => {
  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid
              display="flex"
              flexDirection="column"
              rowGap={"15px"}
              justifyContent="center"
              sm={12}
            >
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Phone" variant="outlined" />
            </Grid>
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step4;

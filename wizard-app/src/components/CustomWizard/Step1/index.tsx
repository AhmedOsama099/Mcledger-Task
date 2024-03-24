import SingerCard from "./SingerCard";
import StepWrapper from "../StepWrapper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useHandleStep1FormData } from "../../../utils/wizardHelper";
import { Alert, Snackbar } from "@mui/material";
import { useHandleTogleAlert } from "../../../utils/generalHelper";
const Step1 = () => {
  const { formData, errorMessage, handleChange } = useHandleStep1FormData();
  const { isAlertOpen, handleCloseAlert } = useHandleTogleAlert(
    errorMessage.length > 0
  );

  return (
    <>
      <StepWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} flex={1}>
            {formData.map((ele) => (
              <Grid
                key={ele.id}
                display="flex"
                justifyContent="center"
                sm={12}
                md={6}
                lg={4}
              >
                <SingerCard {...ele} handleChange={handleChange} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </StepWrapper>

      <Snackbar
        open={isAlertOpen}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
      >
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleCloseAlert}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Step1;

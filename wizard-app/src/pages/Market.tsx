import { Grid } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { handleClearError } from "../features/errorsSlice";
import CustomWizard from "../components/CustomWizard";
import CustomDetails from "../components/CustomDetails";
import CustomLoading from "../components/CustomLoading";
import WizardAlert from "../components/CustomWizard/WizardAlert";

const Market = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.loading);
  const { error } = useAppSelector((state) => state.error);

  return (
    <>
      <Grid container>
        {loading && <CustomLoading />}

        <Grid xs={12} sm={12} md={12} lg={8}>
          <CustomWizard />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={3}>
          <CustomDetails />
        </Grid>
      </Grid>
      <WizardAlert
        errorMessage={error}
        isOpen={error.length > 0}
        handleClearError={() => dispatch(handleClearError())}
      />
    </>
  );
};

export default Market;

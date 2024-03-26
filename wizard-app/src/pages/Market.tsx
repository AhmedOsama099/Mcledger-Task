import { Grid } from "@mui/material";

import CustomWizard from "../components/CustomWizard";
import CustomDetails from "../components/CustomDetails";
import CustomLoading from "../components/CustomLoading";
import { useAppSelector } from "../store/hooks";

const Market = () => {
  const { loading } = useAppSelector((state) => state.loading);

  return (
    <Grid container>
      {loading && <CustomLoading />}

      <Grid md={12} lg={8}>
        <CustomWizard />
      </Grid>
      <Grid md={12} lg={3}>
        <CustomDetails />
      </Grid>
    </Grid>
  );
};

export default Market;

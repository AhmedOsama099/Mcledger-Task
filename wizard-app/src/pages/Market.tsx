import { Grid } from "@mui/material";
import CustomWizard from "../components/CustomWizard";
import CustomDetails from "../components/CustomDetails";

const Market = () => {
  return (
    <Grid container>
      <Grid md={12} lg={8}>
        <CustomWizard />
      </Grid>
      <Grid className="aaaaa" md={12} lg={3}>
        <CustomDetails />
      </Grid>
    </Grid>
  );
};

export default Market;

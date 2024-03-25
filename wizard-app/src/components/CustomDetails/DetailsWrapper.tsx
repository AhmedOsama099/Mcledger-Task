import { FC } from "react";

import { Grid } from "@mui/material";

import { Props } from "../../types/generalModel";

const DetailsWrapper: FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        rowGap: "20px",
        margin: "20% 0",
      }}
    >
      {children}
    </Grid>
  );
};

export default DetailsWrapper;

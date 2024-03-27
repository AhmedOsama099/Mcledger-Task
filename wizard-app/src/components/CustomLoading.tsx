import { CircularProgress, Grid } from "@mui/material";

const CustomLoading = () => {
  return (
    <Grid
      lg={12}
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff23",
        zIndex: "2",
      }}
    >
      <CircularProgress
        size={"5rem"}
        sx={{
          color: "var(--main-color)",
        }}
      />
    </Grid>
  );
};

export default CustomLoading;

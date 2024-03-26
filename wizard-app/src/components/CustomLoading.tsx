import { CircularProgress, Stack } from "@mui/material";

const CustomLoading = () => {
  return (
    <Stack
      className="ahmed"
      sx={{
        color: "grey.500",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "80vh",
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress
        size={"5rem"}
        sx={{
          color: "var(--main-color)",
        }}
      />
    </Stack>
  );
};

export default CustomLoading;

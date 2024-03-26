import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import StepWrapper from "./StepWrapper";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handlePersonalDetailsChange } from "../../features/personalDataSlice";

const Step4 = () => {
  const dispatch = useAppDispatch();
  const { email, mobile, name } = useAppSelector(
    (state) => state.personalDetails
  );
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
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) =>
                  dispatch(
                    handlePersonalDetailsChange({
                      name: "name",
                      value: event.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                type="email"
                onChange={(event) =>
                  dispatch(
                    handlePersonalDetailsChange({
                      name: "email",
                      value: event.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                value={mobile}
                onChange={(event) =>
                  dispatch(
                    handlePersonalDetailsChange({
                      name: "mobile",
                      value: event.target.value,
                    })
                  )
                }
              />
            </Grid>
          </Grid>
        </Box>
      </StepWrapper>
    </>
  );
};

export default Step4;

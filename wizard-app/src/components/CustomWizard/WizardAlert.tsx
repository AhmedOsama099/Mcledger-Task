import { FC } from "react";

import { Alert, Snackbar } from "@mui/material";

import { useHandleTogleAlert } from "../../utils/generalHelper";
import { IWizardAlert } from "../../types/wizardModel";

const WizardAlert: FC<IWizardAlert> = (props) => {
  const { errorMessage, isOpen, handleClearError } = props;
  const { isAlertOpen, handleCloseAlert } = useHandleTogleAlert(
    isOpen,
    handleClearError
  );

  return (
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
  );
};

export default WizardAlert;

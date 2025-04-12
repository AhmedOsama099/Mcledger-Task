import { FC } from "react";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

import styles from "./CustomWizard.module.css";
import { IWizardActions } from "../../types/wizardModel";
import { GenericTextUtils } from "../../utils/GeneralText";

const WizardActions: FC<IWizardActions> = (props) => {
  const {
    activeStep,
    stepsCount,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  } = props;

  return (
    <div id="wizardActionId" className={styles.actionsWrapper}>
      <Button
        aria-label="previous"
        disabled={activeStep === 0}
        onClick={activeStep !== 0 ? handlePreviousStep : () => null}
        className={activeStep === 0 ? styles.disabledButton : styles.button}
        startIcon={<SkipPreviousIcon />}
      >
        {GenericTextUtils.previous}
      </Button>

      <Button
        aria-label="next"
        onClick={
          activeStep < stepsCount
            ? handleNextStep
            : activeStep === stepsCount
            ? handleSubmit
            : () => null
        }
        className={styles.button}
        endIcon={activeStep === stepsCount ? <SaveIcon /> : <SkipNextIcon />}
      >
        {activeStep === stepsCount
          ? GenericTextUtils.submit
          : GenericTextUtils.next}
      </Button>
    </div>
  );
};

export default WizardActions;

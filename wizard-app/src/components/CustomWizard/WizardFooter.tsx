import { FC } from "react";

import IconButton from "@mui/material/IconButton";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import styles from "./CustomWizard.module.css";
import { IWizardActions } from "../../types/wizardModel";

const WizardActions: FC<IWizardActions> = (props) => {
  const { activeStep, stepsCount, handleNextStep, handlePreviousStep } = props;

  return (
    <div className={styles.footerWrapper}>
      <IconButton
        aria-label="previous"
        disabled={activeStep === 0}
        onClick={activeStep !== 0 ? handlePreviousStep : () => null}
        className={activeStep === 0 ? styles.disabledButton : styles.button}
      >
        <SkipPreviousIcon />
      </IconButton>

      <IconButton
        aria-label="next"
        disabled={activeStep === stepsCount}
        onClick={activeStep < stepsCount ? handleNextStep : () => null}
        className={
          activeStep === stepsCount ? styles.disabledButton : styles.button
        }
      >
        <SkipNextIcon />
      </IconButton>
    </div>
  );
};

export default WizardActions;

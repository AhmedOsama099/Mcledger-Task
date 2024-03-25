import { FC } from "react";

import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {
  ColorlibConnector,
  ColorlibStepIcon,
  stepsHeaders,
} from "../../utils/wizardHelper";
import { IWizardContainer } from "../../types/wizardModel";
import { Props } from "../../types/generalModel";
import WizardActions from "./WizardActions";
import styles from "./CustomWizard.module.css";

const WizardContainer: FC<IWizardContainer & Props> = (props) => {
  const {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    stepsCount,
    children,
  } = props;

  return (
    <Stack className={styles.wizardWrapper} sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {stepsHeaders.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <WizardActions
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        stepsCount={stepsCount}
        activeStep={activeStep}
      />

      {children}

      <WizardActions
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        stepsCount={stepsCount}
        activeStep={activeStep}
      />
    </Stack>
  );
};

export default WizardContainer;

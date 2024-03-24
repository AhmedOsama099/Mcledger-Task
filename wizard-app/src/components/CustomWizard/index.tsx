import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {
  ColorlibConnector,
  ColorlibStepIcon,
  stepsHeaders,
  useWizardHelpers,
} from "../../utils/wizardHelper";
import WizardFooter from "./WizardFooter";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import styles from "./CustomWizard.module.css";
import StepsContainer from "./StepsContainer";

export default function CustomWizard() {
  const stepsCount = stepsHeaders.length - 1;

  const { activeStep, handleNextStep, handlePreviousStep } =
    useWizardHelpers(stepsCount);

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

      <StepsContainer>
        {activeStep === 0 ? (
          <Step1 />
        ) : activeStep === 1 ? (
          <Step2 />
        ) : activeStep === 2 ? (
          <Step3 />
        ) : (
          <Step4 />
        )}
      </StepsContainer>

      <WizardFooter
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        stepsCount={stepsCount}
        activeStep={activeStep}
      />
    </Stack>
  );
}

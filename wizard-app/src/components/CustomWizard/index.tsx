import { stepsHeaders, useWizardHelpers } from "../../utils/wizardHelper";
import StepsContainer from "./StepsContainer";

import WizardAlert from "./WizardAlert";
import WizardContainer from "./WizardContainer";

export default function CustomWizard() {
  const stepsCount = stepsHeaders.length - 1;

  const {
    activeStep,
    nextErrorMessage,
    handleClearErrorState,
    handleNextStep,
    handlePreviousStep,
  } = useWizardHelpers(stepsCount);

  return (
    <>
      <WizardContainer
        activeStep={activeStep}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        stepsCount={stepsCount}
      >
        <StepsContainer activeStep={activeStep} />
      </WizardContainer>

      <WizardAlert
        errorMessage={nextErrorMessage}
        isOpen={nextErrorMessage.length > 0}
        handleClearError={handleClearErrorState}
      />
    </>
  );
}

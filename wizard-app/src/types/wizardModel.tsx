export interface IWizardActions {
  activeStep: number;
  stepsCount: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

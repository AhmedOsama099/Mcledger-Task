export interface IWizardFooter {
  activeStep: number;
  stepsCount: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

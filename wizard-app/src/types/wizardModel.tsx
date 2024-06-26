export interface IWizardContainer {
  activeStep: number;
  stepsCount: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSubmit: () => void;
}

export interface IWizardActions {
  activeStep: number;
  stepsCount: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSubmit: () => void;
}

export interface IWizardAlert {
  isOpen: boolean;
  errorMessage: string;
  handleClearError: () => void;
}

export interface IStepsContainer {
  activeStep: number;
}

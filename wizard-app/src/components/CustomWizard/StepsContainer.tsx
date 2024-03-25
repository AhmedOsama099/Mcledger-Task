import { FC } from "react";

import { IStepsContainer } from "../../types/wizardModel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import styles from "./CustomWizard.module.css";

const StepsContainer: FC<IStepsContainer> = (props) => {
  const { activeStep } = props;
  return (
    <div className={styles.stepsContainer}>
      {activeStep === 0 ? (
        <Step1 />
      ) : activeStep === 1 ? (
        <Step2 />
      ) : activeStep === 2 ? (
        <Step3 />
      ) : (
        <Step4 />
      )}
    </div>
  );
};

export default StepsContainer;

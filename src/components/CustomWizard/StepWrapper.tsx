import { FC } from "react";
import { Props } from "../../types/generalModel";
import styles from "./CustomWizard.module.css";

const StepWrapper: FC<Props> = ({ children }) => {
  return <div className={styles.stepWrapper}>{children}</div>;
};

export default StepWrapper;

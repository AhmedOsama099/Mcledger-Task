import { Props } from "../../types/generalModel";
import styles from "./CustomWizard.module.css";

const StepsWrapper = ({ children }: Props) => {
  return <div className={styles.stepsWrapper}>{children}</div>;
};

export default StepsWrapper;

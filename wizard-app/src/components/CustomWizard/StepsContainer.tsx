import { Props } from "../../types/generalModel";
import styles from "./CustomWizard.module.css";

const stepsContainer = ({ children }: Props) => {
  return <div className={styles.stepsContainer}>{children}</div>;
};

export default stepsContainer;

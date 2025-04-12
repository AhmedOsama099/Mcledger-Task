import { FC } from "react";

import { Props } from "../../types/generalModel";
import styles from "./CustomDetails.module.css";

const DetailsWrapper: FC<Props> = ({ children }) => {
  return <div className={styles.detailsContainer}>{children}</div>;
};

export default DetailsWrapper;

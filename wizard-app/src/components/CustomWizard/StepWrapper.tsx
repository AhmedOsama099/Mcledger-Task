import { FC } from "react";
import { Props } from "../../types/generalModel";

const StepWrapper: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default StepWrapper;

import DetailsWrapper from "./DetailsWrapper";
import DetailsCard from "./DetailsCard";
import { useAppSelector } from "../../store/hooks";
import { GenerixTextUtils } from "../../utils/generalText";

const CustomDetails = () => {
  const { amountTotal, songsTotal } = useAppSelector((state) => state.details);

  return (
    <DetailsWrapper>
      <DetailsCard
        title={GenerixTextUtils.count}
        type="Songs"
        value={songsTotal}
      />
      <DetailsCard
        title={GenerixTextUtils.amount}
        type="EGP"
        value={amountTotal}
      />
    </DetailsWrapper>
  );
};

export default CustomDetails;

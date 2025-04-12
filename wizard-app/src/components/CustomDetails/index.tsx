import DetailsWrapper from "./DetailsWrapper";
import DetailsCard from "./DetailsCard";
import { useAppSelector } from "../../store/hooks";
import { GenericTextUtils } from "../../utils/GeneralText";

const CustomDetails = () => {
  const { amountTotal, chaptersTotal } = useAppSelector(
    (state) => state.details
  );

  return (
    <DetailsWrapper>
      <DetailsCard
        title={GenericTextUtils.count}
        type="Chapters"
        value={chaptersTotal}
      />
      <DetailsCard
        title={GenericTextUtils.amount}
        type="EGP"
        value={amountTotal}
      />
    </DetailsWrapper>
  );
};

export default CustomDetails;

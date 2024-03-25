import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import InfoIcon from "@mui/icons-material/Info";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

import { GenerixTextUtils } from "./generalText";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSingers } from "../features/singersSlice";

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(71,159,242,1) 30%, rgba(116,123,238,1) 70%);",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(71,159,242,1) 30%, rgba(116,123,238,1) 70%);",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

export const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(180deg, rgba(71,159,242,1) 30%, rgba(116,123,238,1) 70%);",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(180deg, rgba(71,159,242,1) 30%, rgba(116,123,238,1) 70%);",
  }),
}));

export function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <GroupAddIcon />,
    2: <PlaylistAddCircleIcon />,
    3: <LibraryMusicIcon />,
    4: <InfoIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const stepsHeaders = [
  GenerixTextUtils.setp1,
  GenerixTextUtils.setp2,
  GenerixTextUtils.setp3,
  GenerixTextUtils.setp4,
];

// eslint-disable-next-line react-refresh/only-export-components
export const useWizardHelpers = (stepsCount: number) => {
  const [activeStep, setActiveStep] = useState(0);
  const [nextErrorMessage, setNextErrorMessage] = useState("");

  const selectedSingers = useAppSelector((state) => state.singers.selectedData);

  const handleClearErrorState = () => {
    setNextErrorMessage("");
  };

  const doNext = () => {
    setActiveStep((prev) => (prev < stepsCount ? prev + 1 : prev));
    handleClearErrorState();
  };

  const handleNextStep = () => {
    switch (activeStep) {
      case 0:
        selectedSingers.length > 0
          ? doNext()
          : setNextErrorMessage(GenerixTextUtils.setp1Error);
        break;

      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return {
    activeStep,
    nextErrorMessage,
    handleClearErrorState,
    handleNextStep,
    handlePreviousStep,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep1FormData = () => {
  const dispatch = useAppDispatch();
  const singers = useAppSelector((state) => state.singers);

  useEffect(() => {
    if (
      !singers.loading &&
      singers.data.length <= 0 &&
      singers.error.length === 0
    ) {
      dispatch(fetchSingers());
    }
  }, [dispatch, singers.data, singers.error, singers.loading]);

  return {
    singersData: singers.data,
    loading: singers.loading,
    errorMessage: singers.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2FormData = () => {
  const dispatch = useAppDispatch();
  const singers = useAppSelector((state) => state.singers);

  useEffect(() => {
    if (
      !singers.loading &&
      singers.data.length <= 0 &&
      singers.error.length === 0
    ) {
      dispatch(fetchSingers());
    }
  }, [dispatch, singers.data, singers.error, singers.loading]);

  return {
    singersData: singers.data,
    loading: singers.loading,
    errorMessage: singers.error,
  };
};

import { useState } from "react";

import { styled } from "@mui/material/styles";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import InfoIcon from "@mui/icons-material/Info";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

import { useAppDispatch, useAppSelector } from "../store/hooks";

import { handleResetDetailsValues } from "../features/detailsSlice";
import { GenericTextUtils } from "./GeneralText";

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
  GenericTextUtils.step1,
  GenericTextUtils.step2,
  GenericTextUtils.step3,
  GenericTextUtils.step4,
];

// eslint-disable-next-line react-refresh/only-export-components
export const useWizardHelpers = (stepsCount: number) => {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [nextErrorMessage, setNextErrorMessage] = useState("");

  const selectedSingers = useAppSelector((state) => state.singers.selectedData);
  const selectedAlbums = useAppSelector((state) => state.albums.selectedData);
  const selectedSongs = useAppSelector((state) => state.songs.selectedData);
  const personalDetails = useAppSelector((state) => state.personalDetails);

  const handleClearErrorState = () => {
    setNextErrorMessage("");
  };

  const doNext = (isReset: boolean = true) => {
    isReset && dispatch(handleResetDetailsValues());

    setActiveStep((prev) => (prev < stepsCount ? prev + 1 : prev));
    handleClearErrorState();
  };

  const handleNextStep = () => {
    switch (activeStep) {
      case 0:
        selectedSingers.length > 0
          ? doNext()
          : setNextErrorMessage(GenericTextUtils.step1Error);
        break;

      case 1:
        selectedAlbums.length > 0
          ? doNext()
          : setNextErrorMessage(GenericTextUtils.step2Error);
        break;

      case 2:
        selectedSongs.length > 0
          ? doNext(false)
          : setNextErrorMessage(GenericTextUtils.step3Error);
        break;

      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    dispatch(handleResetDetailsValues());
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    let isSubmit = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/; // Assuming 11 digit phone number

    Object.entries(personalDetails)
      .reverse()
      .map(([key, value]) => {
        if (!value?.trim()) {
          setNextErrorMessage(
            `Please fill ${key[0].toUpperCase() + key.slice(1)} field`
          );
          isSubmit = false;
          return;
        }
      });

    if (isSubmit && !emailRegex.test(personalDetails.email)) {
      setNextErrorMessage("Please enter valid Email value");
      isSubmit = false;
    }

    if (isSubmit && !phoneRegex.test(personalDetails.mobile)) {
      setNextErrorMessage("Please enter valid 11 numbers Mobile value");
      isSubmit = false;
    }

    isSubmit && window.print();
  };

  return {
    activeStep,
    nextErrorMessage,
    handleClearErrorState,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  };
};

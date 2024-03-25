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
import {
  fetchSingers,
  handlePreviousSingersData,
} from "../features/singersSlice";
import { fetchAlbums } from "../features/albumsSlice";
import { fetchSongs, handlePreviousSongsData } from "../features/songsSlice";
import {
  handleDetailsValues,
  handleResetDetailsValues,
} from "../features/detailsSlice";
import { IUISongs } from "../types/songsModel";

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
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [nextErrorMessage, setNextErrorMessage] = useState("");

  const selectedSingers = useAppSelector((state) => state.singers.selectedData);
  const selectedAlbums = useAppSelector((state) => state.albums.selectedData);
  const selectedSongs = useAppSelector((state) => state.songs.selectedData);

  const handleClearErrorState = () => {
    setNextErrorMessage("");
  };

  const doNext = () => {
    dispatch(handleResetDetailsValues());
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

      case 1:
        selectedAlbums.length > 0
          ? doNext()
          : setNextErrorMessage(GenerixTextUtils.setp2Error);
        break;

      case 2:
        selectedSongs.length > 0
          ? doNext()
          : setNextErrorMessage(GenerixTextUtils.setp3Error);
        break;

      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    dispatch(handleResetDetailsValues());
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
export const useHandleStep1SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedSingers = useAppSelector((state) => state.singers.selectedData);
  const singers = useAppSelector((state) => state.singers.data);

  useEffect(() => {
    const data = singers.filter((ele) => selectedSingers.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [singers, selectedSingers, dispatch]);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2FormData = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector((state) => state.albums);
  const selectedSingers = useAppSelector((state) => state.singers.selectedData);
  const prevSelectedSingers = useAppSelector((state) => state.singers.prevData);

  useEffect(() => {
    if (
      !albums.loading &&
      albums.error.length === 0 &&
      JSON.stringify(selectedSingers) !== JSON.stringify(prevSelectedSingers)
    ) {
      dispatch(fetchAlbums(selectedSingers));
      dispatch(handlePreviousSingersData({ value: selectedSingers }));
    }
  }, [
    dispatch,
    albums.data,
    albums.error,
    albums.loading,
    selectedSingers,
    prevSelectedSingers,
  ]);

  return {
    albumsData: albums.data,
    loading: albums.loading,
    errorMessage: albums.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep2SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedAlbums = useAppSelector((state) => state.albums.selectedData);
  const albums = useAppSelector((state) => state.albums.data);

  useEffect(() => {
    const data = albums.filter((ele) => selectedAlbums.includes(ele.id));
    const { songsTotal, amountTotal } = data.reduce(
      (p, c) => {
        p.songsTotal += c.songsCount;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [albums, selectedAlbums, dispatch]);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3FormData = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songs);
  const selectedAlbums = useAppSelector((state) => state.albums.selectedData);
  const prevSelectedSongs = useAppSelector((state) => state.songs.prevData);
  useEffect(() => {
    if (
      !songs.loading &&
      songs.error.length === 0 &&
      JSON.stringify(selectedAlbums) !== JSON.stringify(prevSelectedSongs)
    ) {
      dispatch(fetchSongs(selectedAlbums));
      dispatch(handlePreviousSongsData({ value: selectedAlbums }));
    }
  }, [
    dispatch,
    songs.data,
    songs.error,
    songs.loading,
    selectedAlbums,
    prevSelectedSongs,
  ]);

  return {
    songsData: songs.data,
    loading: songs.loading,
    errorMessage: songs.error,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandleStep3SelectedData = () => {
  const dispatch = useAppDispatch();
  const selectedSongs = useAppSelector((state) => state.songs.selectedData);
  const songs = useAppSelector((state) => state.songs.data);
  useEffect(() => {
    const songsArr: IUISongs[] = [];

    songs.filter((ele) => {
      const arr = ele.data
        ? ele.data.filter((ele1) => selectedSongs.includes(ele1.id))
        : [];
      songsArr.push(...arr);
    });

    const { songsTotal, amountTotal } = songsArr.reduce(
      (p, c) => {
        p.songsTotal += 1;
        p.amountTotal += c.amount;
        return p;
      },
      { songsTotal: 0, amountTotal: 0 }
    );
    dispatch(handleDetailsValues({ songsTotal, amountTotal }));
  }, [songs, selectedSongs, dispatch]);
};

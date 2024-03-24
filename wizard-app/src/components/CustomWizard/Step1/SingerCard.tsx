import { FC } from "react";

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { ISingerCard } from "../../../types/singersModel";
import singerImage from "../../../assets/singer-img-001.png";
import styles from "./Step1.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SingerCard: FC<ISingerCard> = (props) => {
  const {
    id,
    name,
    songsCount,
    albumsCount,
    amount,
    isSelected,
    handleChange,
  } = props;

  return (
    <Card sx={{ maxWidth: 250 }} className={styles.cardWrapper}>
      <CardHeader className={styles.cardHeaderWrapper} title={name} />

      <div className={styles.cardMediaWrapper}>
        <CardMedia
          component="img"
          height="150"
          image={singerImage}
          alt="singer image"
        />
      </div>

      <CardActions disableSpacing className={styles.cardActionsWrapper}>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          value={isSelected}
          onChange={(event) => handleChange(id, event.target.checked)}
        />

        <Typography
          color="text.secondary"
          className={styles.cardContentWrapper}
          fontSize={11}
        >
          <div className={styles.cardContentItemWrapper}>
            <MusicNoteIcon />
            <span>{songsCount}</span>
          </div>

          <div className={styles.cardContentItemWrapper}>
            <AlbumIcon />
            <span>{albumsCount}</span>
          </div>
          <div className={styles.cardContentItemWrapper}>
            <AttachMoneyIcon />
            <span>{amount}</span>
          </div>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default SingerCard;

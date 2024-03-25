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

import styles from "./MusicCard.module.css";
import { useAppDispatch } from "../../store/hooks";
import { handleSingersChange } from "../../features/singersSlice";
import { IMuiscCard } from "../../types/musicCardModel";

const SingerCard: FC<IMuiscCard> = (props) => {
  const { data, image } = props;
  const { id, albumsCount, amount, isSelected, name, songsCount } = data;
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ maxWidth: 250 }} className={styles.cardWrapper}>
      <CardHeader className={styles.cardHeaderWrapper} title={name} />

      <div className={styles.cardMediaWrapper}>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="singer image"
        />
      </div>

      <CardActions disableSpacing className={styles.cardActionsWrapper}>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={isSelected}
          onChange={(event) =>
            dispatch(handleSingersChange({ id, value: event.target.checked }))
          }
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

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

import { useAppDispatch } from "../../store/hooks";
import { handleSingersChange } from "../../features/singersSlice";
import { IMuiscCard } from "../../types/musicCardModel";
import { handleAlbumsChange } from "../../features/albumsSlice";
import styles from "./MusicCard.module.css";

const SingerCard: FC<IMuiscCard> = (props) => {
  const dispatch = useAppDispatch();

  const { data, image, type } = props;
  const { id, amount, isSelected, name, songsCount } = data;

  const singerAlbumsCount =
    type === "Genre" ? data["albumsCount" as keyof typeof data] : null;
  const albumDescription =
    type === "Album" ? data["description" as keyof typeof data] : null;

  const handleChange =
    type === "Album" ? handleAlbumsChange : handleSingersChange;

  return (
    <Card sx={{ maxWidth: 250 }} className={styles.cardWrapper}>
      <CardHeader className={styles.cardHeaderWrapper} title={name} />

      <div className={styles.cardMediaWrapper}>
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="genre image"
        />
      </div>

      {albumDescription && (
        <div className={styles.cardContentWrapper}>
          <Typography variant="body2">{albumDescription}</Typography>
        </div>
      )}

      <CardActions disableSpacing className={styles.cardActionsWrapper}>
        <Checkbox
          icon={<FavoriteBorder className={styles.heartIcon} />}
          checkedIcon={<Favorite className={styles.heartIcon} />}
          checked={isSelected}
          onChange={(event) =>
            dispatch(handleChange({ id, value: event.target.checked }))
          }
        />
        <Typography className={styles.cardDetailsWrapper} fontSize={11}>
          <div className={styles.cardDetailsItemWrapper}>
            <MusicNoteIcon fontSize="small" />
            <span>{songsCount}</span>
          </div>

          {singerAlbumsCount && (
            <div className={styles.cardDetailsItemWrapper}>
              <AlbumIcon fontSize="small" />
              <span>{singerAlbumsCount}</span>
            </div>
          )}
          <div className={styles.cardDetailsItemWrapper}>
            <AttachMoneyIcon fontSize="small" />
            <span>{amount}</span>
          </div>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default SingerCard;

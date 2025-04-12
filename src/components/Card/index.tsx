import { FC } from "react";

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { useAppDispatch } from "../../store/hooks";
import { handleGenresChange } from "../../features/genresSlice";
import { ICard } from "../../types/cardModel";
import { handleAuthorsChange } from "../../features/authorsSlice";
import styles from "./Card.module.css";

const GenreCard: FC<ICard> = (props) => {
  const dispatch = useAppDispatch();

  const { data, image, type } = props;
  const { id, amount, isSelected, name, chaptersCount } = data;

  const genreAuthorsCount =
    type === "Genre" ? data["authorCount" as keyof typeof data] : null;
  const authorDescription =
    type === "Author" ? data["description" as keyof typeof data] : null;

  const handleChange =
    type === "Author" ? handleAuthorsChange : handleGenresChange;

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

      {authorDescription && (
        <div className={styles.cardContentWrapper}>
          <Typography variant="body2">{authorDescription}</Typography>
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
            <CategoryIcon fontSize="small" />
            <span>{chaptersCount}</span>
          </div>

          {genreAuthorsCount && (
            <div className={styles.cardDetailsItemWrapper}>
              <PersonIcon fontSize="small" />
              <span>{genreAuthorsCount}</span>
            </div>
          )}
          <div className={styles.cardDetailsItemWrapper}>
            <MenuBookIcon fontSize="small" />
            <span>{amount}</span>
          </div>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default GenreCard;

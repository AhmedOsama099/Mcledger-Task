import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import styles from "./CustomDetails.module.css";
import { IDetailsCard } from "../../types/detailsModel";

const DetailsCard: FC<IDetailsCard> = (props) => {
  const { title, type, value } = props;

  return (
    <Card
      sx={{ minWidth: 250, minHeight: 100, maxWidth: 250 }}
      className={styles.cardWrapper}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h4">
          {value} <Typography variant="caption">{type}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;

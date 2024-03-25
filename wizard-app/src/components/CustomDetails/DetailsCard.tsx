import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import styles from "./CustomDetails.module.css";
import { FC } from "react";
import { IDetailsCard } from "../../types/detailsModel";

const DetailsCard: FC<IDetailsCard> = (props) => {
  const { title, type, value } = props;

  return (
    <Grid md={12} lg={8}>
      <Card
        sx={{ minWidth: 250, minHeight: 100 }}
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
    </Grid>
  );
};

export default DetailsCard;
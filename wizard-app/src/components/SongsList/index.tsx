import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

import { IUISongsList } from "../../types/songsModel";
import { useAppDispatch } from "../../store/hooks";
import { handleSongsChange } from "../../features/songsSlice";
import styles from "./SongsList.module.css";

const SongsList: React.FC<{ data: IUISongsList[] }> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data?.map(({ albumTitle, albumDescription, data }) => {
        return (
          <>
            <Typography
              className={styles.titleContainer}
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
            >
              {albumTitle} - {albumDescription}
            </Typography>

            {data?.map((ele) => {
              const labelId = `checkbox-list-label-${ele.id}`;

              return (
                <ListItem
                  key={ele.id}
                  disablePadding
                  className={styles.detailsContainer}
                >
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={ele.isSelected}
                        tabIndex={-1}
                        disableRipple
                        onChange={(event) =>
                          dispatch(
                            handleSongsChange({
                              id: ele.id,
                              value: event.target.checked,
                            })
                          )
                        }
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={ele.id} primary={ele.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </>
        );
      })}
    </List>
  );
};

export default SongsList;

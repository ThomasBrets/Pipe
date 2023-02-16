import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon  from "@mui/icons-material/ArrowForward";
import CheckroomIcon from '@mui/icons-material/Checkroom';
const Lists = () => {
  return (
    <div className="menu column is-one-quarter">
      <List >
        <ListItem >
          <ListItemIcon>
              <CheckroomIcon/>
          </ListItemIcon>
          <ListItemText primary="Indumentaria"/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
              <ArrowForwardIcon/>
          </ListItemIcon>
          <ListItemText primary="Zapatillas"/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
              <ArrowForwardIcon/>
          </ListItemIcon>
          <ListItemText primary="Remeras"/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
              <ArrowForwardIcon/>
          </ListItemIcon>
          <ListItemText primary="Abrigos"/>
        </ListItem>
      </List>
    </div>
  );
};

export default Lists;

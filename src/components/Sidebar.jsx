import React from "react";
import Lists from "./Lists";
import { makeStyles } from "@mui/styles";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const useStyles = makeStyles((theme) => ({
  drawer:{
    width: "160px"
  }
}))

const Sidebar = () => {
  const classes = useStyles()
  const itemList = ['Indumentaria', 'Zapatillas', 'Remeras', 'Buzos', 'Camperas']
  return (
    <div>
      <Drawer variant="permanent" className={classes.drawer}>
        <Divider/>
      <List>
          {itemList.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <CheckroomIcon /> : <ArrowForwardIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>  
  );
};

export default Sidebar;

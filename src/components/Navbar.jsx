import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  menuButton:{
      marginRight: theme.spacing(2)
  },
  title:{
      flexGrow: 1
  },
  appBar:{
    width:`calc(100% - ${240}px)`,
    marginLeft: 240,
},
  offset: theme.mixins.toolbar
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box>

      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" className={classes.title}>
            Pipe
          </Typography>
          <Button variant="text" color="secondary" sx={{ mr: 2 }}>
          <ShoppingCartIcon/>
          </Button>
          <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button variant="contained" color="secondary" >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </Box>
  );
};

export default Navbar;

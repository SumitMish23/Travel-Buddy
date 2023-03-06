import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

import useStyles from './styles';

const Header = () => {
    const classes=useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Buddy
        </Typography>
        <Box className={classes.flex}>
        <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
         
          {/* <Autocomplete> */}
          <div className={classes.search}>
          
             <SearchIcon className={classes.searchIcon}/>
             <InputBase placeholder="Search... "  classes={{root:classes.inputRoot,input:classes.inputInput}}/>

          </div>
           
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
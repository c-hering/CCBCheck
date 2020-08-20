import React, { Component } from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

class TopBar extends Component{

  render(){
    return(
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            CC Bathroom Check
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

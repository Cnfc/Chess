import React from "react";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
      <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
      >
        <List component="nav">
          <ListItem bitton onClick={()=> console.log("Featured")}>
            Event start In
          </ListItem>
          <ListItem bitton onClick={()=> console.log("Venue NFO")}>
            Venue NFO
          </ListItem>
          <ListItem bitton onClick={()=> console.log("HIGHLIGHTS")}>
            HIGHLIGHTS
          </ListItem>
          <ListItem bitton onClick={()=> console.log("Pricing")}>
            Pricing
          </ListItem>
          <ListItem bitton onClick={()=> console.log("Location")}>
            Location
          </ListItem>

        </List>



      </Drawer>
    );
};

export default SideDrawer;

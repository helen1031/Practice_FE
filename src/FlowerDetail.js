import Appbar from "./Appbar";
import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const FlowerDetail = (props) => {
  const [item, setItem] = useState(props.item);

  return (
    <div>
      <Appbar></Appbar>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText primary={item.name} fullWidth={true} />
        </ListItem>
      </List>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText primary={item.description} fullWidth={true} />
        </ListItem>
      </List>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText primary={item.quantity} fullWidth={true} />
        </ListItem>
      </List>
    </div>
  );
};

export default FlowerDetail;

import { DeleteOutlined } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const Flower = (props) => {
  const [item, setItem] = useState(props.item);

  const deleteItem = props.deleteItem;

  const deleteEventHandler = () => {
    deleteItem(item);
  };

  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText primary={item.name} fullWidth={true} />
      </ListItem>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </List>
  );
};

export default Flower;

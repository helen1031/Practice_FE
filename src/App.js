import Appbar from "./Appbar";
import React, { useState, useEffect } from "react";
import { List, Paper, Fab } from "@mui/material";
import Flower from "./Flower";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/flower", "GET", null).then((response) => {
      setItems(response.data);
    });
  }, []);

  const deleteItem = (item) => {
    const newItems = items.filter((e) => e.id !== item.id);
    setItems([...newItems]);
  };

  let flowerItems = items.length > 0 && (
    <Paper style={{ margin: 20 }}>
      <List>
        {items.map((item) => (
          <Flower item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  let flowerListPage = (
    <div>
      <Appbar />
      <div className="flowerItems">{flowerItems}</div>
      <Link to="/flower/create">
        <Fab sx={fabStyle} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );

  return <div className="App">{flowerListPage}</div>;
}

export default App;

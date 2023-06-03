import { TextField, Container, Button } from "@mui/material";
import React, { useState } from "react";
import { postCreate } from "./service/ApiService";

const AddFlower = (props) => {
  const [nameValue, setNameValue] = useState({});
  const [featureValue, setFeatureValue] = useState({});
  const [quantityValue, setQuantityValue] = useState({});

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onFeatureChange = (event) => {
    setFeatureValue(event.currentTarget.value);
  };
  const onQuantityChange = (event) => {
    setQuantityValue(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    const name = data.get("name");
    const description = data.get("description");
    const quantity = data.get("quantity");
    postCreate({
      name: name,
      description: description,
      quantity: quantity,
    }).then((response) => {
      window.location.href = "/";
    });
  };

  return (
    <div className="PostCreate">
      <h3>등록하기</h3>
      <Container style={{ margin: 10 }}>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            name="name"
            id="name"
            label="이름"
            variant="outlined"
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            name="description"
            id="description"
            label="상세"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="quantity"
            id="quantity"
            label="수량"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button type="submit" variant="contained">
            등록
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddFlower;

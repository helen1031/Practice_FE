import "./App.css";
import AddFlower from "./AddFlower";
import Login from "./Login";
import SignUp from "./SignUp";
import SocialLogin from "./SocialLogin";
import FlowerDetail from "./FlowerDetail";
import App from "./App";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path={"sociallogin"} element={<SocialLogin />} />
        <Route path={"flower/create"} element={<AddFlower />} />
        <Route path={"flower/detail"} element={<FlowerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

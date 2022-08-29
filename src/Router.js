import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPhoto from "./pages/mainPhoto";
import MainMap from "./pages/mainMap";
import Detail from "./pages/detail";
import UserPage from "./pages/userPage";
import Login from "./pages/login";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPhoto />} />
        <Route exact path="/map" element={<MainMap />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/userpage" element={<UserPage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

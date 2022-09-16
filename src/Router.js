import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPhoto from "./pages/mainPhoto";
import MainMap from "./pages/mainMap";
import Detail from "./pages/detail";
import UserPage from "./pages/userPage";
import Login from "./pages/login";
import PostPage from "./pages/postPage";
import InfiniteScroll from "./components/infinifeScrollTest";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPhoto />} />
        <Route path="/scroll" element={<InfiniteScroll />} />
        <Route exact path="/map" element={<MainMap />} />
        <Route exact path="/post" element={<PostPage />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/userpage" element={<UserPage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

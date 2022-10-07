import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPhoto from "../pages/mainPhoto";
import MainMap from "../pages/mainMap";
import UserPage from "../pages/userPage";
import Login from "../pages/login";
import PostPage from "../pages/postPage";
import Kakao from "../components/loginPage/kakao";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPhoto />} />
        <Route exact path="/map" element={<MainMap />} />
        <Route
          exact
          path="/post"
          element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/post/:postId"
          element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          }
        />
        <Route exact path="/userpage/:memberId" element={<UserPage />} />
        <Route
          exact
          path="/login"
          element={
            <PublicRoute restrictedLogin={true}>
              <Login />
            </PublicRoute>
          }
        />
        <Route exact path="/member/kakao/callback" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

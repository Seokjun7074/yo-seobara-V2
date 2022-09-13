// 게시물 관련 API
import axios from "axios";
import qs from "qs";
import { getCookie } from "../shared/Cookie";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});

export const apis = {
  // 무한스크롤 게시물 조회

  // 좌표기준 게시물 조회
  getPostLocation: (params) =>
    instance.get(
      "/api/posts/location",
      { params: params },
      {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      }
    ),

  // 게시물 작성
  createPost: (data) =>
    instance.post("/api/posts", data, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }),
  // 게시물 전체 싹 다 조회
  getPost: () =>
    instance.get("api/posts", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }),
};

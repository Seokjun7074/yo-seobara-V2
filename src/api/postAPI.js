// 게시물 관련 API
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const post_API = {};

// 게시물 관련 API
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});

export const apis = {
  // 무한스크롤 게물 조회

  // 좌표기준 게시물 조회

  // 게시물 작성
  createPost: (data) =>
    instance.post("/api/post", data, {
      headers: {
        Authorization: `Bearer ${ss}`,
      },
    }),
};

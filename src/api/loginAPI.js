// 유저 로그인 관련 API
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apis = {
  registerUser: (userData) => api.post("/api/member/signup", userData),
  loginUser: (userData) => api.post("/api/member/login", userData),
  logoutUser: (userData) => api.post("/api/auth/users/logout", userData),
  checkNickname: (userData) =>
    api.post("/api/member/signup/nicknameCheck", userData),
  kakaoLogin: (code) => api.get(`/member/kakao/callback?code=${code}`),
};

//kakaoLogin: (code) => api.get(`?code=${code}`),

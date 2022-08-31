// 유저 로그인 관련 API
import axios from "axios";

const api = axios.create({
  baseURL: 'https://만들어줘.com',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
}
});

export const apis = { 
  registerUser: (userData) => api.post('/api/users/signup', userData),
  loginUser: (userData) => api.post('/api/users/login', userData),
  logoutUser: (userData) => api.post('/api/auth/users/logout', userData),
  getMypage: (userData) => api.get('/api/mypage', userData),
}


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
  getPostPic: (page) =>
    instance.get(`/api/posts?page=${page}&size=6`, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }),
  // 유저페이지 게시물 조회
  getUserPost: (page, nickname) =>
    instance.get(
      `/api/posts?page=${page}&size=10&search=nickname&keyword=${encodeURIComponent(
        nickname
      )}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      }
    ),
  // 단일 게시물 조회
  getSinglePost: (postId) => instance.get(`/api/posts/${postId}`),
  // 좌표기준 게시물 조회
  getPostLocation: (params) =>
    instance.post(
      "/api/posts/bounds",
      params,
      // { params: params },
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
  // 게시물 수정
  editPost: (data, postId) =>
    instance.put(`/api/posts/${postId}`, data, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }),

  //게시물좋아요
  likePost: (data) =>
  instance.post(`/api/heart`, data, {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  }),

   //게시물좋아요취소
   likeDelete: (postId,memberId) =>
   instance.delete(`/api/heart`,  {
     headers: {
       Authorization: `Bearer ${getCookie("accessToken")}`,
     },
     data:{
            postId: postId,
            memberId: memberId,
     },
   }),



    // 게시물 삭제
    deletePost: (postId) =>
  instance.delete(`/api/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  }),

  // 좌표를 주소로 변환
  convertToAddress: (lat, lng) =>
    instance.get(`/api/map/address?lat=${lat}&lng=${lng}`),

  // 주소를 좌표로 변환
  convertToLocation: (address) =>
    instance.get(`api/map/coordinate?address=${address}`),
};

//댓글 관련 API
import axios from "axios";
import { getCookie } from "../shared/Cookie";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});

export const apis = {

    //댓글조회
    getComment: (postId) =>
    instance.get(`/api/posts/${postId}/comments`, {
      headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }),

    //댓글작성
    createComment: (idNum, data) => 
    
      instance.post(
        `/api/posts/${idNum}/comments`,{'content':data},{
            headers: {
                Authorization: `Bearer ${getCookie("accessToken")}`,
              }, 
        }),

    };






// 댓글 관련 API
import axios from "axios";

export const instance = axios.create({
    baseURL: "",
    withCredentials: true,
    headers: {
    "Content-Type": "application/json",
}
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
//토큰불러올자리


//댓글불러오기
export const uploadComment = () =>{

}




//댓글등록
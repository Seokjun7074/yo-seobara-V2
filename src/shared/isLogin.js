import { getCookie } from "./Cookie";

const isLogin = () => !!getCookie("accessToken");

export default isLogin;

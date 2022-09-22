import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { apis } from "../../api/loginAPI";
import { useNavigate } from "react-router-dom";
//import { setCookie } from "../../shared/Cookie";

const Kakao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const SocialLoginKakao = async () => {
      let code = new URL(window.location.href).searchParams.get("code");
      console.log(code);

      if (code) {
        console.log(code);
        const res = await apis.kakaoLogin(code);
        console.log(res);
        alert("카카오 로그인");
      } else {
        alert("ㅜㅜ");
      }
    };
    SocialLoginKakao();
    // navigate("/");
  }, []);
};

export default Kakao;

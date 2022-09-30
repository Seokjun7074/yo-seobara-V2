import React, { useEffect, useState } from "react";
import { apis } from "../../api/loginAPI";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../shared/Cookie";

const Kakao = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const SocialLoginKakao = async () => {
      let code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        const res = await apis.kakaoLogin(code);
        const token = res.data;

        setCookie("accessToken", token.accessToken, token.accessTokenExpiresIn);
        setCookie("refreshToken", token.refreshToken);
        setCookie("nickname", token.nickname);

        alert("카카오 로그인이 완료되었습니다!");
        window.location.replace("/");
      } else {
        alert("카카오 로그인이 불가능합니다. 다른 방식으로 시도해주세요");
        navigate("/login");
      }
    };
    SocialLoginKakao();
  }, []);
};

export default Kakao;

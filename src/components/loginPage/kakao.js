import React, { useEffect } from "react";
import { apis } from "../../api/loginAPI";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../shared/Cookie";

const Kakao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const SocialLoginKakao = async () => {
      let code = new URL(window.location.href).searchParams.get("code");

      if (code) {
        console.log(code);
        const res = await apis.kakaoLogin(code);
        console.log(res.data);

        const token = res.data;
        setCookie("accessToken", token.accessToken, token.accessTokenExpiresIn);
        setCookie("refreshToken", token.refreshToken);
        //닉네임도 넘어오면 저장해야돼
        alert("카카오 로그인이 완료되었습니다!");
        navigate("/");
      } else {
        alert("카카오 로그인이 불가능합니다. 다른 방식으로 시도해주세요");
        navigate("/login");
      }
    };
    SocialLoginKakao();
  }, []);
};

export default Kakao;

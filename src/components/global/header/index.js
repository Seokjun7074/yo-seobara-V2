import { useEffect, useState } from "react";
import {
  AnonymousButton,
  HeaderMenu,
  HeaderWrapper,
  LogineButton,
  LoginedButton,
  LogoBox,
  LogoutButton,
} from "./style";
import { getCookie, deleteCookie, setCookie } from "../../../shared/Cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFalse } from "../../../redux/modules/postSlice";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [nowURL, setNowURL] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const url = window.location.pathname;
    setNowURL(url);
    const cookie = getCookie("accessToken");
    if (cookie) {
      setIsLogin(true);
    }
  }, []);

  const navigatePage = () => {
    if (nowURL === "/map") {
      navigate("/");
    } else {
      dispatch(updateFalse());
      navigate("/map");
    }
  };

  const Logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("nickname");

    setIsLogin(false);
    window.location.replace("/");
  };

  return (
    <HeaderWrapper>
      <LogoBox
        src={process.env.PUBLIC_URL + "images/logo.png"}
        onClick={() => {
          navigate("/");
        }}
      />
      <HeaderMenu>
        <LogineButton isLogin={isLogin} onClick={() => [navigate("/login")]}>
          로그인
        </LogineButton>
        <LogoutButton isLogin={isLogin} onClick={Logout}>
          로그아웃
        </LogoutButton>
        <LoginedButton
          onClick={() => {
            navigate("/post");
          }}
          isLogin={isLogin}
        >
          게시글 작성
        </LoginedButton>
        <AnonymousButton onClick={navigatePage}>
          {nowURL === "/map" ? "사진으로 보기" : "지도로 보기"}
        </AnonymousButton>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;

import { useEffect, useState } from "react";
import {
  AnonymousButton,
  HeaderMenu,
  HeaderTitle,
  HeaderWrapper,
  LogineButton,
  LoginedButton,
  LogoutButton,
} from "./style";
import { getCookie, deleteCookie } from "../../../shared/Cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFalse } from "../../../redux/modules/postSlice";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [nowURL, setNowURL] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setNowURL(window.location.pathname);
    const cookie = getCookie("accessToken");
    if (cookie) {
      setIsLogin(true);
    }
  }, []);

  const navigatePage = () => {
    if (nowURL === "/map") {
      navigate("/");
    } else if (nowURL === "/") {
      dispatch(updateFalse());
      navigate("/map");
    }
  };

  const Logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("nickname");
    deleteCookie("memberId");

    setIsLogin(false);
    window.location.replace("/");
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>요 서바라</HeaderTitle>
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
          {nowURL === "/" ? "지도로보기" : "사진으로 보기"}
        </AnonymousButton>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;

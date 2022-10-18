import Cookies from "universal-cookie";

// 쿠키 객체 생성
const cookies = new Cookies();

// 쿠키에 저장할 때

export const setCookie = (name, value, exp) => {
  let date = new Date();
  date.setTime(exp);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
};

// 쿠키에 저장한 거 쓸 때
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 지울 때
export const deleteCookie = (name) => {
  return cookies.remove(name);
};

import { Navigate } from "react-router-dom";
import isLogin from "../shared/isLogin";

const PrivateRoute = ({ children }) => {
  if (!isLogin()) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;

import { Navigate } from "react-router-dom";
import isLogin from "../shared/isLogin";

const PublicRoute = ({ restrictedLogin, children }) => {
  if (isLogin() && restrictedLogin) return <Navigate to="/" />;
  else return children;
};

export default PublicRoute;

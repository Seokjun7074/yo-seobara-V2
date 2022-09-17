import * as React from "react";
import { useState } from "react";
import LoginContainer from "../../components/loginPage/loginContainer";
import RegisterContainer from "../../components/loginPage/registerContainer";

export default function Login(props) {
  
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? (
        <LoginContainer login={login} setLogin={setLogin} />
      ) : (
        <RegisterContainer login={login} setLogin={setLogin} />
      )}
    </div>
  );
}

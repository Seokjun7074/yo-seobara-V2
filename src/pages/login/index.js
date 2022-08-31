import React from "react";
// import "../login/index.css";
import { useState, useRef } from "react";

const Login = (props) => {
  const [login, setLogin] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nicknameInput = useRef();

  const submitHandler =(event)=>{
      event.prevenDefault();

      // const enteredEmail = emailInputRef.current.value;
      // const enteredPassword = passwordInputRef.current.value;
      // const enteredPasswordConfirm = passwordConfirmInputRef.current.value;
      // const enteredNickname = nicknameInputRef.current.value;
      
      

  };

  



  return (
    <div>
      <div className="contentsWrap">
        <div className="loginWindow">
          {login? 
            //<form onSubmit={submitHandler}>
              <div>
                <div className="loginvalues">
                <input type="text" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
                <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
                <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">로그인</button> 
                </div>
              <br></br>
              <div >
                <p>
                  계정이 없으신가요?
                  <button onClick={()=>{setLogin(false)}} class="noneunderline" className="haveAccount">가입하기</button>
                </p>
              </div>
            </div>
          // </form>
           : 
          //<form onSubmit={submitHandler}>
            <div>
              <input type="text" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
              <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
              <input type="text" placeholder="비밀번호 확인" className="inlineToBlock" ref={passwordConfirmInput}></input>
              <input type="text" placeholder="닉네임" className="inlineToBlock" ref={nicknameInput}></input>
              <button>닉네임 중복확인</button>
              <button onClick={()=>{setLogin(true)}}>뒤로가기</button>
            </div>
          //</form>
           }
        </div>
      </div>
    </div>
  );
};

export default Login;


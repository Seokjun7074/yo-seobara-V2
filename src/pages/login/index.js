import React from "react";
// import "../login/index.css";
import { useState, useRef } from "react";
import { apis } from "../../api/loginAPI";

const Login = (props) => {
  const [login, setLogin] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nicknameInput = useRef();

  const submitHandler =async(event)=>{
      event.preventDefault();

      
      if (login){
        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;

        //로그인 post 요청
        const userObj={
          "username": enteredEmail,
          "password": enteredPassword
          }
          const res =await apis.loginUser(userObj)
          console.log(res)
        
      } else{
        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;
        const enteredPasswordConfirm = passwordConfirmInput.current.value;
        const enteredNickname = nicknameInput.current.value;
        
        //회원가입 post 요청
        const userObj={
          "username": enteredEmail,
          "password": enteredPassword,
          "passwordCheck": enteredPasswordConfirm,
          "nickname": enteredNickname,
          "nicknameCheck": enteredNickname,
          }
          const res =await apis.registerUser(userObj)
          console.log(res)
          console.log(enteredEmail, enteredPassword, enteredPasswordConfirm, enteredNickname);
      }

        
        
      

  };

  



  return (
    <div>
      <div className="contentsWrap">
        <div className="loginWindow">
          {login? 
            <form onSubmit={submitHandler}>
              <div>
                <div className="loginvalues">
                <input type="email" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
                <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
                <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">로그인</button> 
                </div>
              <br></br>
              <div >
                <p>
                  계정이 없으신가요?
                  <button onClick={()=>{setLogin(false)}} className="haveAccount">가입하기</button>
                </p>
              </div>
            </div>
          </form>
           : 
          <form onSubmit={submitHandler}>
            <div>
              <input type="email" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
              <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
              <input type="text" placeholder="비밀번호 확인" className="inlineToBlock" ref={passwordConfirmInput}></input>
              <input type="text" placeholder="닉네임" className="inlineToBlock" ref={nicknameInput}></input>
              <button type="button">닉네임 중복확인</button>
              <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">회원가입</button>
              <button onClick={()=>{setLogin(true)}}>뒤로가기</button>
            </div>
          </form>
           }
        </div>
      </div>
    </div>
  );
};

export default Login;


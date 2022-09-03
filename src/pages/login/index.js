//뷰
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//기능
import { useState, useRef } from "react";
//통신
import { apis } from "../../api/loginAPI";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Login(props) {
  const [login, setLogin] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nicknameInput = useRef();

  //console.log(emailInput);

  //닉네임 중복확인 api 호출 함수
  const nicknameCheck = async (event) => {
    const userNickname = {
      nickname: nicknameInput.current.value,
    };
    const res = await apis.checkNickname(userNickname);
    console.log(res.data);
    //console.log(userNickname);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    //console.log(event)
    if (login) {
      const enteredEmail = emailInput.current.value;
      const enteredPassword = passwordInput.current.value;

      console.log(enteredEmail);

      //로그인 post 요청
      const userObj = {
        username: enteredEmail,
        password: enteredPassword,
      };
      const res = await apis.loginUser(userObj);
      console.log(res);
      //console.log(userObj);

    } else {
      const enteredEmail = emailInput.current.value;
      const enteredPassword = passwordInput.current.value;
      const enteredPasswordConfirm = passwordConfirmInput.current.value;
      const enteredNickname = nicknameInput.current.value;

      //console.log(enteredEmail)

      //회원가입 post 요청
      const userObj = {
        username: enteredEmail,
        password: enteredPassword,
        passwordCheck: enteredPasswordConfirm,
        nickname: enteredNickname,
      };

       const res = await apis.registerUser(userObj);
       console.log(res);
      //console.log(userObj);
    }
  };

  return (
    <div>
      {login ? (
        
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  로그인
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    inputRef={emailInput}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    inputRef={passwordInput}
                  />
                  {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={submitHandler}
                  >
                    로그인
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                    </Grid>
                    <Grid item>
                      {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                      <button
                        onClick={() => {
                          setLogin(false);
                        }}
                        color="primary"
                      >
                        {" "}
                        계정이 없으신가요? 가입하기
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
          </ThemeProvider>
       
      ) : (
        
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  회원가입
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="이메일"
                        autoFocus
                        inputRef={emailInput}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="닉네임"
                        name="lastName"
                        autoComplete="family-name"
                        inputRef={nicknameInput}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="비밀번호"
                        name="email"
                        autoComplete="email"
                        inputRef={passwordInput}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="비밀번호 확인"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        inputRef={passwordConfirmInput}
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
                  </Grid>

                  <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={nicknameCheck}
                  >
                    닉네임중복확인
                  </Button>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={submitHandler}
                  >
                    가입하기
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                      <button
                        onClick={() => {
                          setLogin(true);
                        }}
                      >
                        이미 계정이 있으신가요? 로그인하기
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
          </ThemeProvider>
      
      )}
    </div>
  );
}

// import React from "react";
// import { useState, useRef } from "react";
// import { apis } from "../../api/loginAPI";

// const Login = (props) => {
//   const [login, setLogin] = useState(true);

//   const emailInput = useRef();
//   const passwordInput = useRef();
//   const passwordConfirmInput = useRef();
//   const nicknameInput = useRef();

//   //닉네임 중복확인 api 호출 함수
//   const nicknameCheck = async(event)=>{
//     const userNickname={
//       "nickname" : nicknameInput.current.value
//       }
//     const res =await apis.checkNickname(userNickname)
//     console.log(res.data)
//     // console.log(nicknameInput.current.value);
//   }

//   const submitHandler =async(event)=>{
//       event.preventDefault();

//       if (login){
//         const enteredEmail = emailInput.current.value;
//         const enteredPassword = passwordInput.current.value;

//         //로그인 post 요청
//         const userObj={
//           "username": enteredEmail,
//           "password": enteredPassword
//           }
//           const res =await apis.loginUser(userObj)
//           console.log(res)

//       } else{
//         const enteredEmail = emailInput.current.value;
//         const enteredPassword = passwordInput.current.value;
//         const enteredPasswordConfirm = passwordConfirmInput.current.value;
//         const enteredNickname = nicknameInput.current.value;

//         //회원가입 post 요청
//         const userObj={
//           "username": enteredEmail,
//           "password": enteredPassword,
//           "passwordCheck": enteredPasswordConfirm,
//           "nickname": enteredNickname,

//           }

//           const res =await apis.registerUser(userObj)
//           console.log(res)
//           console.log(userObj);
//       }

//   };

//   return (
//     <div>
//       <div className="contentsWrap">
//         <div className="loginWindow">
//           {login?
//             <form onSubmit={submitHandler}>
//               <div>
//                 <div className="loginvalues">
//                 <input type="email" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
//                 <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
//                 <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">로그인</button>
//                 </div>
//               <br></br>
//               <div >
//                 <p>
//                   계정이 없으신가요?
//                   <button onClick={()=>{setLogin(false)}} className="haveAccount">가입하기</button>
//                 </p>
//               </div>
//             </div>
//           </form>
//            :
//           <form onSubmit={submitHandler}>
//             <div>
//               <input type="email" placeholder="이메일" className="inlineToBlock" ref={emailInput}></input>
//               <input type="text" placeholder="비밀번호" className="inlineToBlock" ref={passwordInput}></input>
//               <input type="text" placeholder="비밀번호 확인" className="inlineToBlock" ref={passwordConfirmInput}></input>
//               <input type="text" placeholder="닉네임" className="inlineToBlock" ref={nicknameInput}></input>
//               <button type="button" onClick={nicknameCheck}>닉네임 중복확인</button>
//               <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">회원가입</button>
//               <button onClick={()=>{setLogin(true)}}>뒤로가기</button>
//             </div>
//           </form>
//            }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

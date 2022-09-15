//뷰
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//기능
import { useState, useRef } from "react";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";
//통신
import { apis } from "../../api/loginAPI";
//쿠키저장
import { setCookie } from "../../shared/Cookie";
//소셜로그인
import { KAKAO_AUTH_URL } from "../../shared/SocialOauth";

const theme = createTheme();

export default function Login(props) {
  
  const navigate = useNavigate();

  const [nickState, setNickState] = useState(false);
  const [login, setLogin] = useState(true);

  const [nick, nickChange] = useInput();
  const [checknick,setChecknick]=useState('');

  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nicknameInput = useRef();


  //닉네임 중복확인 api 호출 함수
  const nicknameCheck = async (event) => {
    let enteredNickname = "";
    
    //닉네임 유효성 검사
    if (nick.length < 2 || nick.length > 10) {
      console.log(nick);
      alert("닉네임은 2자이상 10자 이하로 입력해주세요");
      return;
    } else {
      enteredNickname = nick;
      setNickState(true);
    }
    
    const userNickname = {
      //nickname: nicknameInput.current.value,
      nickname: enteredNickname,
    };
    const res = await apis.checkNickname(userNickname);
    console.log(res.data);
    if (res.data == 0) {
      alert("사용가능한 닉네임입니다!");
      setChecknick(enteredNickname) 
      //setNickState(true);
    } else {
      alert("이미 다른 사용자가 사용중입니다!");
    }
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
      //쿠키저장
      try {
        const token = res.data.data.token;
        setCookie("accessToken", token.accessToken, token.accessTokenExpiresIn);
        setCookie("refreshToken", token.refreshToken);
        //setCookie('userId', res.data.data.id, token.accessTokenExpiresIn);
        alert("로그인 성공");
        navigate("/");
        //window.location.reload(true);
      } catch (error) {
        alert(res.data.errorCode.message);
        console.log(error);
      }
      console.log(res.data.data.token);
    } else {
      const enteredEmail = emailInput.current.value;
      const enteredPassword = passwordInput.current.value;
      const enteredPasswordConfirm = passwordConfirmInput.current.value;
      const enteredNickname = nicknameInput.current.value;
      const regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if(nickState&&(checknick!==enteredNickname)){
          alert('중복확인해주세요')
          return
        }
      if (enteredEmail.match(regExp) == null) {
        alert("이메일 형식으로 입력해주세요!");

        return;
      }

      if (enteredPassword !== enteredPasswordConfirm) {
        alert("비밀번호가 서로 다릅니다");
        return;
      }

      if (!nickState) {
        alert("닉네임 중복 확인을 해주세요");
        return;
      }
      //회원가입 post 요청
      const userObj = {
        username: enteredEmail,
        password: enteredPassword,
        passwordCheck: enteredPasswordConfirm,
        nickname: enteredNickname,
      };

      const res = await apis.registerUser(userObj);
      if (res.status == 200) {
        setLogin(true);
      }

      console.log(res);
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
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitHandler}
                >
                  로그인
                </Button>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  //onClick={submitHandler}
                  href={KAKAO_AUTH_URL}
                >
                  카카오로 로그인하기
                </Button>

               
                
                <hr></hr>
                {/* <img src={`${process.env.PUBLIC_URL}/images/kakao_login.svg`} alt="kakao_login_medium.pnkakao_login.svg" /> */}
                {/* </a> */}
              
                
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
                      label="닉네임 : 2자 이상 10자 이하"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={nickChange}
                      inputRef={nicknameInput}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="비밀번호 : 5자 이상 입력해주세요"
                      name="password"
                      type="password"
                      autoComplete="password"
                      inputRef={passwordInput}
                      //onChange={pwChange}
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
                      //onChange={pwCheckChange}
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

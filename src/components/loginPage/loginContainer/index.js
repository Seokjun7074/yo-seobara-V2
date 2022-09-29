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
import { useRef } from "react";
import { useNavigate } from "react-router";
//통신
import { apis } from "../../../api/loginAPI";
//쿠키저장
import { setCookie } from "../../../shared/Cookie";
// 소셜로그인
import { KAKAO_AUTH_URL } from "../../../shared/SocialOauth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0584BB",
    },
    secondary: {
      main: "#C4441C",
    },
  },
});

const LoginContainer = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const emailInput = useRef();
  const passwordInput = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

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
      setCookie("nickname", res.data.data.nickname);
      //setCookie('userId', res.data.data.id, token.accessTokenExpiresIn);
      alert("로그인 성공");
      navigate("/");
      //window.location.reload(true);
    } catch (error) {
      alert(res.data.errorCode.message);
      console.log(error);
    }
  };

  return (
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
          {/*  */}
          {/* "" */}
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
              style={{ padding: "8px" }}
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
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                padding: "8px",
              }}
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
  );
};

export default LoginContainer;

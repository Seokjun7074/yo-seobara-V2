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
import { useRef, useState } from "react";
import useInput from "../../../hooks/useInput";
//통신
import { apis } from "../../../api/loginAPI";

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

const RegisterContainer = ({ login, setLogin }) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nicknameInput = useRef();

  //레프값 저장하는 함수
  const [nick, nickChange] = useInput();
  //서버에서 중복검사 통과했는지 여부
  const [nickState, setNickState] = useState(false);
  //회원가입을 누르는 시점에 닉네임 인풋값과
  //중복확인을 받았던 닉네임 인풋값과 같은지
  const [checknick, setChecknick] = useState("");

  //닉네임 중복 확인 api 호출 함수
  const nicknameCheck = async (event) => {
    event.preventDefault();

    let enteredNickname = "";

    //닉네임 유효성 검사
    if (nick.length < 2 || nick.length > 10) {
      alert("닉네임은 2자이상 10자 이하로 입력해주세요");
      return;
    } else {
      enteredNickname = nick;
      //setNickState(true);
    }

    const userNickname = {
      nickname: enteredNickname,
    };

    const res = await apis.checkNickname(userNickname);
    if (res.data == 0) {
      alert("사용가능한 닉네임입니다!");
      //서버에 보내서 통과한 값을 저장
      setChecknick(enteredNickname);
      //서버통과했는지 여부
      setNickState(true);
    } else {
      alert("이미 다른 사용자가 사용중입니다!");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    const enteredPasswordConfirm = passwordConfirmInput.current.value;
    const enteredNickname = nicknameInput.current.value;

    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    //닉네임 중복확인을 했고,
    //중복확인한 값과 입력한 값이 같은지 확인 후
    //회원가입할 수 있게
    if (nickState && checknick !== enteredNickname) {
      alert("중복확인해주세요");
      return;
    }

    //이메일 형식 확인
    if (enteredEmail.match(regExp) == null) {
      alert("이메일 형식으로 입력해주세요");
      return;
    }

    //비밀번호 체크
    if (enteredPassword !== enteredPasswordConfirm) {
      alert("비밀번호가 서로 다릅니다");
      return;
    }

    //닉네임 중복 확인하지 않으면 가입 못하게
    if (!nickState) {
      alert("닉네임 중복 확인을 해주세요");
      return;
    }

    //회원가입 post 요청->성공시 로그인 창으로
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={nicknameCheck}
              style={{ padding: "8px" }}
            >
              닉네임중복확인
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                padding: "8px",
              }}
            >
              가입하기
            </Button>
            <hr />
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
  );
};

export default RegisterContainer;

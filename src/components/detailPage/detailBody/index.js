import React from "react";
import {
  BodyBox,
  BodyTop,
  BodySide,
  BodyHeader,
  BodyTitle,
  BodyMain,
  Footer,
  Time,
} from "./style";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko"; //한국말 번역

const DetailBody = (data) => {
  const Like = () => {};

  const detail = data.data;
  // console.log(detail);


  const nowTime = moment().format(`${detail.createdAt}`), // 서버로부터 받은 작성,또는수정시간
    startTime = new Date(nowTime);

  return (
    <BodyBox>
      <BodyTop>
        <button onClick={Like}>좋아요좋아요</button>
      </BodyTop>

      <BodySide>
        <Grid container sx={{ color: "text.primary" }}>
          <DeleteIcon />
        </Grid>
        수정랑 삭제
      </BodySide>

      <BodyHeader>주소:{detail.address}</BodyHeader>
      <BodyTitle>
        {detail.nickname}의 {detail.title}
      </BodyTitle>
      <BodyMain>내용:{detail.content}</BodyMain>
      <Footer>
        <Time>
          <Moment fromNow>{startTime}</Moment>
        </Time>
      </Footer>
    </BodyBox>
  );
};

export default DetailBody;

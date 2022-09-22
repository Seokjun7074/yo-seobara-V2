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
  UseName
} from "./style";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko"; //한국말 번역
import { getCookie } from "../../../shared/Cookie";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";


const DetailBody = (data) => {

const navigate = useNavigate()

const detail = data.data;
const idNum = detail.id
const [count,setCount] = useState(0);

  // console.log(typeof(count));
      
  
  const [heart, setHeart] = useState(false);

  const Like = () => {
      if(heart){
        setHeart(false);
        console.log('취소')
        setCount(0);
      }else{
        setHeart(true);
        console.log('좋아요')
        setCount(1);
    //     await axios
    //   .post(`${process.env.REACT_APP_API_URL}/api/posts/${idNum}/heart`, {
    //    headers: {
    //                Authorization: `Bearer ${getCookie('accessToken')}`,
    //             },  
    //    }
    //    )
    //    .then((res) => {
    //    console.log('성공');
    
    //    })
    //  .catch((err) => console.log(err));

      }
  };

  

  const nowTime = moment().format(`${detail.createdAt}`), // 서버로부터 받은 작성,또는수정시간
    startTime = new Date(nowTime);

  return (
    <BodyBox>
      <BodyTop>

    {heart ? (
      <button onClick={Like}><FavoriteIcon/></button>
    ):(
<button onClick={Like}><FavoriteBorderIcon/></button>
    )}:{detail.heart + count}
           
      </BodyTop>

      <BodySide>
        <Grid container sx={{ color: "text.primary" }}>
          <DeleteIcon />
        </Grid>
        수정랑 삭제
      </BodySide>

      <BodyHeader>주소:{detail.address}</BodyHeader>
      <BodyTitle>
        <UseName onClick={() => navigate(`/userpage/${detail.nickname}`)}>
          {detail.nickname}님의
          </UseName>
        {detail.title}
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

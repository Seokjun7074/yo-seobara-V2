import React, { useEffect } from "react";
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
import CreatedAt from "../../global/createdAt";
 
 
const DetailBody = (data) => {

const navigate = useNavigate()



const detail = data.data;
const idNum = detail.postId




 //메인에서받아오는데이터test
const likeCount = 22; // 해당게시물의 좋아요개수
// const likePostId = [46, 44,37,];  //유저가 좋아요한 게시물아이디
const test = false; // 유저가 게시물좋아요하였는지 서버에서확인


const [like,setLike] = useState(test); // 좋아요 트글
 
 

  const Like = () => {
      if(like){
        setLike(false);
        console.log('취소')
        
      }else{
        setLike(true);
        console.log('좋아요')


        //서버 테스트
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


  return (
    <BodyBox>

      <BodyTop>

{test ? (<>
 {like ? (
  <button onClick={Like}><FavoriteIcon/>:{likeCount } </button>
  
):(
<button onClick={Like}><FavoriteBorderIcon/>:{likeCount -1} </button>
)}  
</>   
): (
<>
{like ? (
  <button onClick={Like}><FavoriteIcon/>:{likeCount+1 } </button>
  
):(
<button onClick={Like}><FavoriteBorderIcon/>:{likeCount } </button>
)} 
</>
)}

      
      
      </BodyTop>

      <BodySide>
        지도로표시하기
        작업중
      </BodySide>

      <BodyHeader>주소:{detail.address}</BodyHeader>

      <BodyTitle>
        <UseName onClick={() => navigate(`/post/${detail.postId}`,
          {state: detail}
        )}>
          {detail.nickname}님의
        </UseName>
        {detail.title}
      </BodyTitle>
      
      <BodyMain>내용:{detail.content}</BodyMain>
      
      <Footer>
        <Time>
          <CreatedAt time={detail.createdAt}/>
        </Time>
      </Footer>
    
    </BodyBox>
  );
};

export default DetailBody;

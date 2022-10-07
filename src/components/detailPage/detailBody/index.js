//내부 css
import { BodyBox, BodyTop, BodySide, BodyHeader,BodyTitle,
   BodyMain, Footer,Time, UseName,} from "./style";

//mui css
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//
import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//컴포넌트
import CreatedAt from "../../global/createdAt";
import { getCookie } from "../../../shared/Cookie";
import {myHeartTrue, myHeartFalse} from '../../../redux/modules/postSlice';
import { __likePost ,__likeDelete} from "../../../redux/async/asyncPost";

const DetailBody = (data) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const idx = data.data.idx; //상세데이터 넘버
  const memberId = getCookie("memberId"); //로그인한 아이디번호

 const detail = useSelector((state)=> state.post.data[idx]); //상세데이터
const heart = useSelector((state)=> state.post.data[idx].myHeart);   //좋아요 여부
const heartCount = useSelector((state)=> state.post.data[idx].heart);   //좋아요수
 const idNum = detail.postId; //상세데이터의 게시물번호
 


  const Like =  () => {
if(heart){

  dispatch(__likeDelete({
              postId: idNum,
              memberId: memberId,
            }));
            dispatch(myHeartFalse(idx));

}else{

  dispatch(__likePost(  {
              postId: idNum,
              memberId: memberId,
            }));
            dispatch(myHeartTrue(idx));
}

 };

  return (
    <BodyBox>
      <BodyTop>
      {heart ? (
  
           <button onClick={Like}>
              <FavoriteIcon fontSize="large"/>
              {heartCount}
            </button>
          
        ) : (
          
            <button onClick={Like}>
            <FavoriteBorderIcon fontSize="large"/>
            {heartCount}
          </button>
         
         
        )}
      </BodyTop>

      <BodyHeader>{detail.address}</BodyHeader>

      <BodyTitle>
        <UseName
          onClick={() =>
            navigate(`/userpage/${detail.nickname}`, { state: detail })
          }
        >
          {detail.nickname} 님의
        </UseName>
        {detail.title}
      </BodyTitle>

      <BodyMain>{detail.content}</BodyMain>

      <Footer>
        <Time>
          <CreatedAt time={detail.createdAt} />
        </Time>
      </Footer>
    </BodyBox>
  );
};

export default DetailBody;

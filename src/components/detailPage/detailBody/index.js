//내부 css
import {
  BodyBox,
  BodyTop,
  BodySide,
  BodyHeader,
  BodyTitle,
  BodyMain,
  Footer,
  Time,
  UseName,
} from "./style";
//mui css
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//컴포넌트
import CreatedAt from "../../global/createdAt";
import { getCookie } from "../../../shared/Cookie";

import axios from "axios";

const DetailBody = (data) => {
  
  const navigate = useNavigate();

  const detail = data.data; //상세내용의 데이터
  const idNum = detail.postId;
  const memberId = getCookie("memberId"); //로그인한 유저닉네임

  //메인에서받아오는데이터test
  // const likeCount = 22; // 해당게시물의 좋아요개수
  // const likePostId = [46, 44,37,];  //유저가 좋아요한 게시물아이디
  const test = false; // 유저가 게시물좋아요하였는지 서버에서확인

  //서버열면 사용할코드
  const likeCount = detail.heart; //좋아요 개수
  const myHeart = detail.myHeart;

  // const memberId = 1; //rrrrr의 계정아이디번호

  // console.log(detail.myHeart,'바디');

  const [like, setLike] = useState(myHeart); // 좋아요 트글

  const [count, setCount] = useState(0);

  const Like = async () => {
    if (like) {
      setLike(false);

      if (myHeart) {
        setCount(-1);
      } else {
        setCount(0);
      }

      await axios
        .delete(
          `${process.env.REACT_APP_API_URL}/api/heart`,

          {
            headers: {
              Authorization: `Bearer ${getCookie("accessToken")}`,
            },
            data: {
              postId: idNum,
              memberId: memberId,
            },
          }
        )
        .then((res) => {
          console.log("성공");
        })
        .catch((err) => console.log(err));
    } else {
      setLike(true);

      if (myHeart) {
        setCount(0);
      } else {
        setCount(+1);
      }
      console.log("좋아요");

      //서버 테스트
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/heart`,
          {
            postId: idNum,
            memberId: memberId,
          },

          {
            headers: {
              Authorization: `Bearer ${getCookie("accessToken")}`,
            },
          }
        )
        .then((res) => {
          console.log("성공");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <BodyBox>
      <BodyTop>
        {like ? (
          <>
            <button onClick={Like}>
              <FavoriteIcon fontSize="large"/>
            </button>
            {likeCount + count}
          </>
        ) : (
          <button onClick={Like}>
            <FavoriteBorderIcon fontSize="large"/>
            {likeCount + count}
          </button>
        )}

      </BodyTop>

      {/* <BodySide>
        지도로표시하기
        작업중
      </BodySide> */}

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

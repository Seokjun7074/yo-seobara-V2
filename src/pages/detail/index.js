//mui 스타일
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

//스타일 파일
import {
  ContentLabel,
  ContentWrapper,
  DetailWrapper,
  SliderWrapper,
  UserButton,
  UserButtonWrapper,
  UserInfoWrapper,
  UserText,
} from "./style";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//컴포넌트
import Slider from "../../components/global/slider";
import DetailBody from "../../components/detailPage/detailBody";
import DetailForm from "../../components/detailPage/detailForm";
import CommentList from "../../components/detailPage/comments";
import { getCookie } from "../../shared/Cookie";
import CreatedAt from "../../components/global/createdAt";

const Detail = (item) => {
  const navigate = useNavigate();
  const isMap = item.isMap; // 지도페이지용 관리
  const data = item.item; //메인에서 받아오는 데이터
  const idNum = data.postId; //게시물아이디
  // console.log(data.myHeart,'디테일');
  const userId = parseInt(getCookie("memberId")); //로그인한 유저닉네임
  //단축메뉴창
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateClick = () => {
    navigate(`/post/${idNum}`);
    console.log("수정");
  };
  const deleteClick = async () => {
    // console.log('삭제');
    // alert('삭제하고있습니다')
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/posts/${idNum}`, {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        console.log("성공");
        alert("삭제하고있습니다");
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <DetailWrapper>
      <UserInfoWrapper>
        <div>
          <UserText clickable={true}>{data.nickname}</UserText>
          <UserText>님의 {data.title}</UserText>
          <CreatedAt time={data.createdAt} />
        </div>
        {userId === data.memberId ? (
          <UserButtonWrapper>
            <UserButton>수정</UserButton>
            <UserButton>삭제</UserButton>
          </UserButtonWrapper>
        ) : null}
      </UserInfoWrapper>
      <SliderWrapper>
        <Slider imageList={data.imageUrls} />
      </SliderWrapper>
      <ContentLabel>이 장소는요</ContentLabel>
      <ContentWrapper>{data.content}</ContentWrapper>
      <DetailForm id={data.postId} />
      <CommentList data={data} />
    </DetailWrapper>
  );
};

export default Detail;

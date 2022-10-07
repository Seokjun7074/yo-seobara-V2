//mui 스타일
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

//스타일 파일
import {
  Box,
  DetailBox,
  DetailHeader,
  DetailMain,
  Detailside,
  DetailFooter,
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

const Detail = (item) => {
  const navigate = useNavigate();

  const data = item.item; //메인에서 받아오는 데이터
  const idNum = data.postId; //게시물아이디
  // console.log(data.myHeart,'디테일');
  const user = getCookie("nickname"); //로그인한 유저닉네임

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
    // console.log('성공');
    window.location.reload();
  };

  const locationClick = () => {
    console.log("위치정보");
  };

  const actions = [
    {
      icon: <CreateIcon fontSize="large" onClick={updateClick} />,
      name: "수정",
    },
    {
      icon: <DeleteIcon fontSize="large" onClick={deleteClick} />,
      name: "게시물삭제",
    },
    {
      icon: <FmdGoodIcon fontSize="large" onClick={locationClick} />,
      name: "위치정보",
    },
  ];

  //기본이미지로 변경(로딩중)해야함
  const dummydata = [
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  ];

  return (
    <>
      <DetailBox>
        <DetailMain>
          <Slider
            imageList={
              data.imageUrls === undefined ? dummydata : data.imageUrls
            }
          />
        </DetailMain>

        <Detailside>
          <DetailBody data={data} />
        </Detailside>

        <DetailHeader>
          <DetailForm id={data.postId} />
        </DetailHeader>

        <DetailFooter>
          <CommentList data={data} />
        </DetailFooter>
      </DetailBox>

      {data.nickname === user ? (
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 0, right: 0 }}
          icon={<AddIcon fontSize="large" />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      ) : null}
    </>
  );
};

export default Detail;

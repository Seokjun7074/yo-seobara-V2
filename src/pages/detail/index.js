import Comments from "../../components/detailPage/comments";
import { StyledComponent } from "styled-components";
import styled, { css } from "styled-components";
//페이지컴포넌트
import DetailPohto from "../../components/detailPage/detailPohto";
import CommentList from "../../components/detailPage/comments";
import {
  Box,
  DetailBox,
  DetailHeader,
  DetailMain,
  Detailside,
  DetailFooter,
} from "./style";
import DetailForm from "../../components/detailPage/detailForm";
// import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../../components/global/slider";
import DetailBody from "../../components/detailPage/detailBody";
import Modal from "../../components/global/modal";


import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import { getCookie } from "../../shared/Cookie";


const Detail = (item) => {
  const data = item.item;
  const [detail, setDetail] = useState(data);
  // console.log(data);
  // console.log(detail);

  //단축다이얼
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const updateClick = () => {
console.log('수정');
}

const deleteClick = () => {
console.log('삭제');
// axios
// .delete(`${process.env.REACT_APP_API_URL}/api/posts/${idNum}/`,{heades:{
  
//   Authorization: `Bearer ${getCookie('accessToken')}`,
        
// }})
// .then((res) => {
//   console.log('성공');
// })
// .catch((err) => console.log(err);
// }

const locationClick = () => {
  console.log('위치정보');
  }

  console.log(getCookie);
  
  const actions = [
    { icon: <CreateIcon fontSize="large" onClick={updateClick}/>, name: '수정' },
    { icon: <DeleteIcon fontSize="large" onClick={deleteClick}/>, name: '게시물삭제', },
    { icon: <FmdGoodIcon fontSize="large" onClick={locationClick} />, name: '위치정보' },
  ];




  const dummydata = {
    url: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    ],
  };

  return (
    <>
    <DetailBox>
      <DetailMain>
        {/* <Slider imageList={detail.imageUrls}/>  */}
        <Slider imageList={dummydata.url}/> 
        </DetailMain>

      <Detailside>
        <DetailBody data={data} />
      </Detailside>

      <DetailHeader>
        <DetailForm id={detail.postId} />
      </DetailHeader>

      <DetailFooter>
        <CommentList id={detail.postId} />
      </DetailFooter>

     
    </DetailBox>
    <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16, }}
        icon={<AddIcon fontSize="large"/>}
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
    </>
  );
};

export default Detail;

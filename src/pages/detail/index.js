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

const Detail = (item) => {
  const data = item.item;
  console.log(item);
  const [detail, setDetail] = useState({
    ...data,
  });
  // console.log(detail)
  // console.log(detail.data)

  const dummydata = {
    url: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    ],
  };

  return (
    <DetailBox>
      <DetailMain>{/* <Slider imageList={dummydata.url}/>  */}</DetailMain>

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
  );
};

export default Detail;

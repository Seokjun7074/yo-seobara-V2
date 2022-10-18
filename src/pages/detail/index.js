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

import { useNavigate } from "react-router-dom";
import axios from "axios";

//컴포넌트
import Slider from "../../components/global/slider";
import DetailForm from "../../components/detailPage/detailForm";
import CommentList from "../../components/detailPage/comments";
import { getCookie } from "../../shared/Cookie";
import CreatedAt from "../../components/global/createdAt";

const Detail = (item) => {
  const navigate = useNavigate();
  const isMap = item.isMap; // 지도페이지용 관리
  const data = item.item; //메인에서 받아오는 데이터
  const idNum = data.postId; //게시물아이디
  const userId = parseInt(getCookie("memberId")); //로그인한 유저닉네임

  const updateClick = () => {
    navigate(`/post/${idNum}`);
  };

  const deleteClick = async () => {
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
      <ContentLabel>🔍 이 장소는요</ContentLabel>
      <ContentWrapper>{data.content}</ContentWrapper>
      {/* 댓글 작성 부분 */}
      <DetailForm id={data.postId} />
      {/* 댓글 리스트 */}
      <CommentList data={data} />
    </DetailWrapper>
  );
};

export default Detail;

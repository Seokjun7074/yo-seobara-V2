//스타일 파일
import {
  ContentLabel,
  ContentWrapper,
  DetailWrapper,
  LabelWrapper,
  SliderWrapper,
  UserButton,
  UserButtonWrapper,
  UserInfoWrapper,
  UserText,
} from "./style";

import { useNavigate } from "react-router-dom";

//컴포넌트
import Slider from "../../components/global/slider";
import DetailForm from "../../components/detailPage/detailForm";
import CommentList from "../../components/detailPage/comments";
import { getCookie } from "../../shared/Cookie";
import CreatedAt from "../../components/global/createdAt";
import { useDispatch, useSelector } from "react-redux";
import {
  __deletePost,
  __likeDelete,
  __likePost,
} from "../../redux/async/asyncPost";
import Heart from "../../components/detailPage/heart";

const Detail = ({ modalToggel, setModlaToggle, isMap }) => {
  const navigate = useNavigate();
  const data = modalToggel.data; //메인에서 받아오는 데이터
  const idNum = data.postId; //게시물아이디
  const userId = parseInt(getCookie("memberId")); //로그인한 유저닉네임
  const dispatch = useDispatch();
  const memberId = getCookie("memberId");
  const nowData = useSelector((state) => {
    if (isMap) return state.post.location.find((e) => e.postId === idNum);
    else return state.post.data.find((e) => e.postId === idNum);
  });

  const editClick = () => {
    navigate(`/post/${idNum}`);
  };

  const deleteClick = async () => {
    dispatch(__deletePost(idNum))
      .unwrap()
      .then(() => {
        alert("게시물이 삭제되었습니다.");
        setModlaToggle({ ...modalToggel, open: false });
      });
  };

  const likePost = (heart) => {
    const data = {
      postId: idNum,
      memberId: memberId,
    };
    if (heart) {
      dispatch(__likeDelete(data));
    } else {
      dispatch(__likePost(data));
    }
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
            <UserButton onClick={editClick}>수정</UserButton>
            <UserButton onClick={deleteClick}>삭제</UserButton>
          </UserButtonWrapper>
        ) : null}
      </UserInfoWrapper>

      <SliderWrapper>
        <Slider imageList={data.imageUrls} />
      </SliderWrapper>
      <LabelWrapper>
        <ContentLabel>🔍 이 장소는요</ContentLabel>
        <Heart nowData={nowData} likePost={likePost} />
        {/* <Heart myHeart={myHeart} likePost={likePost} heartCount={heartCount} /> */}
      </LabelWrapper>
      <LabelWrapper>
        <ContentWrapper>{data.content}</ContentWrapper>
      </LabelWrapper>
      {/* 댓글 작성 부분 */}
      <DetailForm id={data.postId} />
      {/* 댓글 리스트 */}
      <CommentList data={data} />
    </DetailWrapper>
  );
};

Detail.defaultProps = {
  isMap: false,
};

export default Detail;

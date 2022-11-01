import { useSelector } from "react-redux";
import { UserInfoWrapper, TotalElements, UserInfoBox, Nickname } from "./style";

const UserInfo = ({ isMyPage }) => {
  const nickname = useSelector((state) => state.post.userPageData.nickname);
  const totalElements = useSelector(
    (state) => state.post.userPageData.totalElements
  );

  return (
    <UserInfoWrapper>
      <UserInfoBox>
        <Nickname>{nickname}님의 게시물</Nickname>
        <TotalElements>{totalElements}개</TotalElements>
      </UserInfoBox>
    </UserInfoWrapper>
  );
};

export default UserInfo;

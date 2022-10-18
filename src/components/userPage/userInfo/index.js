import { UserInfoWrapper, TotalElements, UserInfoBox, Nickname } from "./style";

const UserInfo = ({ isFollowing, isMyPage, userInfoData }) => {
  return (
    <UserInfoWrapper>
      <UserInfoBox>
        <Nickname>{userInfoData.nickname}의 게시물</Nickname>
        <TotalElements>{userInfoData.totalElements}개</TotalElements>
      </UserInfoBox>
    </UserInfoWrapper>
  );
};

export default UserInfo;

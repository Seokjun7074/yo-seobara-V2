import { UserInfoWrapper, FollowButton, UserInfoBox } from "./style";

const UserInfo = ({ isFollowing, isMyPage, nickname }) => {
  return (
    <UserInfoWrapper>
      <UserInfoBox>
        <span>{nickname}</span>
        <FollowButton isMyPage={isMyPage}>
          {isFollowing ? "Following" : "Follow"}
        </FollowButton>
      </UserInfoBox>
    </UserInfoWrapper>
  );
};

export default UserInfo;

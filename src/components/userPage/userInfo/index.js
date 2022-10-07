import { UserInfoWrapper, FollowButton, UserInfoBox, Nickname } from "./style";

const UserInfo = ({ isFollowing, isMyPage, nickname }) => {
  return (
    <UserInfoWrapper>
      <UserInfoBox>
        <Nickname>{nickname}의 게시물</Nickname>
        {/* <FollowButton isMyPage={isMyPage}>
          {isFollowing ? "Following" : "Follow"}
        </FollowButton> */}
      </UserInfoBox>
    </UserInfoWrapper>
  );
};

export default UserInfo;

import { useParams } from "react-router-dom";
import Header from "../../components/global/header";
import InfiniteScroll from "../../components/userPage/infiniteScroll";
import UserInfo from "../../components/userPage/userInfo";
import { UserPageWrapper } from "./style";

const UserPage = () => {
  let { memberId } = useParams();

  return (
    <UserPageWrapper>
      <Header></Header>
      <UserInfo isMyPage={true} />
      <InfiniteScroll memberId={memberId} />
    </UserPageWrapper>
  );
};

export default UserPage;

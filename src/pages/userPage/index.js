import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apis } from "../../api/postAPI";
import Header from "../../components/global/header";
import InfiniteScroll from "../../components/userPage/infiniteScroll";
import UserInfo from "../../components/userPage/userInfo";
import { UserPageWrapper } from "./style";

const UserPage = () => {
  // useParams로 이름 가져오기
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);
  const [isFollowing, setFoloowing] = useState(false);
  const [dataList, setDataList] = useState([]);

  let { nickname } = useParams();

  const fetchData = async () => {
    const res = await apis.getUserPost(page, nickname);
    setLastPage(res.data.data.last);
    setDataList([...dataList, ...res.data.data.content]);
  };

  useEffect(() => {
    if (!lastPage) {
      fetchData();
    }
    //쿠키닉네임 === params
  }, [page]);
  // console.log(lastPage, page);
  return (
    <UserPageWrapper>
      <Header></Header>
      <UserInfo
        isFollowing={isFollowing}
        isMyPage={isMyPage}
        nickname={nickname}
      />
      <InfiniteScroll
        page={page}
        lastPage={lastPage}
        setPage={setPage}
        dataList={dataList}
      />
    </UserPageWrapper>
  );
};

export default UserPage;

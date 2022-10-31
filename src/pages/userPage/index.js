import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apis } from "../../api/postAPI";
import Header from "../../components/global/header";
import InfiniteScroll from "../../components/userPage/infiniteScroll";
import UserInfo from "../../components/userPage/userInfo";
import { __getUserPost } from "../../redux/async/asyncPost";
import { UserPageWrapper } from "./style";

const UserPage = () => {
  // useParams로 이름 가져오기
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);
  const [isFollowing, setFoloowing] = useState(false);
  // const [dataList, setDataList] = useState([]);
  const [userInfoData, setUserInfoData] = useState({
    totalElements: 0,
    nickname: "",
  });
  let { memberId } = useParams();
  const dispatch = useDispatch();

  // const dataList = useSelector((state) => state.post.userPageData.data);
  // console.log(dataList);
  const fetchData = async () => {
    // const res = await apis.getUserPost(page, memberId);
    dispatch(__getUserPost({ page, memberId }));
    // setUserInfoData({
    //   totalElements: res.data.data.totalElements,
    //   nickname: res.data.data.content[0].nickname,
    // });
    // setLastPage(res.data.data.last);
    // setDataList([...dataList, ...res.data.data.content]);
  };

  // useEffect(() => {
  //   if (!lastPage) {
  //     fetchData();
  //   }
  //   //쿠키닉네임 === params
  // }, [page]);
  return (
    <UserPageWrapper>
      <Header></Header>
      <UserInfo
        isFollowing={isFollowing}
        isMyPage={isMyPage}
        userInfoData={userInfoData}
      />
      <InfiniteScroll
        memberId={memberId}
        // page={page}
        // lastPage={lastPage}
        // setPage={setPage}
        // dataList={dataList}
      />
    </UserPageWrapper>
  );
};

export default UserPage;

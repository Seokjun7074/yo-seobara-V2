import { useState } from "react";
import { useEffect } from "react";
import { apis } from "../../api/postAPI";
import Header from "../../components/global/header";
import { UserPageWrapper } from "./style";

const UserPage = () => {
  // useParams로 이름 가져오기
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await apis.getUserPost(0, "테스트");
    console.log(res.data.data.content);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <UserPageWrapper>
      <Header></Header>
      유저페이지
    </UserPageWrapper>
  );
};

export default UserPage;

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { apis } from "../../api/postAPI";

const EditPage = () => {
  let { postId } = useParams();
  const [pick, setPick] = useState({ lat: null, lng: null }); // 사용자가 위치 지정한 곳의 좌표
  const [pickedAddress, setPickAddress] =
    useState("주소에서 위치를 찍어주세요!"); // 사용자가 위치 지정한 곳의 좌표

  const [location, setLocation] = useState({
    // 현재 위치
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const fetchData = async () => {
    const res = await apis.getSinglePost(postId);
    const resData = res.data.data;
    console.log(resData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
};

export default EditPage;

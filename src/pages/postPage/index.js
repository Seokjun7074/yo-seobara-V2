import { PostPageWrapper, CenterContainer } from "./style";
import InputContainer from "../../components/postpage/inputContainer";
import MapContainer from "../../components/postpage/mapContainer";
import { useState } from "react";
import AddressSearchContainer from "../../components/postpage/addressSearchContainer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apis } from "../../api/postAPI";
const PostPage = () => {
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

  const [editData, setEditData] = useState({
    isEditting: false,
    title: "",
    content: "",
    imageUrls: [],
  });
  let { postId } = useParams();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, [setLocation]);

  const fetchData = async () => {
    try {
      const res = await apis.getSinglePost(postId);
      const resData = res.data.data;
      setPickAddress(resData.address);
      setPick(resData.location);
      setEditData({
        ...editData,
        isEditting: true,
        title: resData.title,
        content: resData.content,
        imageUrls: resData.imageUrls,
      });
    } catch {
      alert("게시물 불러오기 실패");
    }
  };
  // 수정페이지 모드
  useEffect(() => {
    if (postId) {
      fetchData();
    } else return;
  }, []);

  return (
    <PostPageWrapper>
      <CenterContainer>
        <AddressSearchContainer setPick={setPick} pick={pick} />
        <MapContainer
          location={location}
          pick={pick}
          setPick={setPick}
          setPickAddress={setPickAddress}
        ></MapContainer>
        <InputContainer
          pick={pick}
          pickedAddress={pickedAddress}
          editData={editData}
          postId={postId}
        ></InputContainer>
      </CenterContainer>
    </PostPageWrapper>
  );
};

export default PostPage;

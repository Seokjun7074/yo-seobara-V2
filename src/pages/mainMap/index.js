import { MainMapWrapper } from "./style";
import MainMapView from "../../components/mainMapPage/map";
import LocationList from "../../components/mainMapPage/locationList";
import { useEffect, useState } from "react";
import Header from "../../components/global/header";
const MainMap = () => {
  // 더미 데이터
  const dummyData = [
    {
      postId: 1,
      title: "게시글 제목1",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56373715662199, lng: 127.18928068820057 },
    },
    {
      postId: 2,
      title: "게시글 제목2",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56023916024953, lng: 127.19060736808481 },
    },
    {
      postId: 3,
      title: "게시글 제목3",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.559192929653875, lng: 127.19127245819271 },
    },
    {
      postId: 4,
      title: "게시글 제목4",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56226360165682, lng: 127.19233291482071 },
    },
    {
      postId: 5,
      title: "게시글 제목5",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.54373715662199, lng: 127.18228068820057 },
    },
    {
      postId: 6,
      title: "게시글 제목6",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56723916024953, lng: 127.16060736808481 },
    },
    {
      postId: 7,
      title: "게시글 제목7",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.559192923653875, lng: 127.19827245819271 },
    },
    {
      postId: 8,
      title: "게시글 제목8",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.54226360165682, lng: 127.26233291482071 },
    },
    {
      postId: 9,
      title: "게시글 제목9",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.579192923653875, lng: 127.19527245819271 },
    },
    {
      postId: 10,
      title: "게시글 제목10",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.54226330165682, lng: 127.26633291482071 },
    },
  ];

  const [location, setLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isPanto: false,
  });

  const [pickedLocation, setPickedLocation] = useState({
    postId: null,
    location: null,
  }); // 선택한 장소
  const [locationList, setLocationList] = useState(dummyData); // 데이터 리스트
  const [boundary, setBoundary] = useState(); // 보이는 지도 범위

  // 위치정보 가져와서 서버에 목록 요청하기
  useEffect(() => {
    // get요청 후 setLocationList(red.data)
    // console.log("새로운 위치를 기반으로 데이터 리스트 요청");
    if (boundary) {
      // console.log("boundary 갱신");
      // console.log(boundary);
    }
  }, [boundary]);
  return (
    <MainMapWrapper>
      <Header></Header>
      <LocationList
        location={location}
        locationList={locationList}
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
      ></LocationList>
      <MainMapView
        location={location}
        setLocation={setLocation}
        locationList={locationList}
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
        setBoundary={setBoundary}
        boundary={boundary}
      ></MainMapView>
    </MainMapWrapper>
  );
};

export default MainMap;

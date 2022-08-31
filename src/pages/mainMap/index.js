/*global kakao*/
import { MainMapWrapper } from "./style";
import MainMapView from "../../components/mainMapPage/map";
import LocationList from "../../components/mainMapPage/locationList";
import { useState } from "react";
import Header from "../../components/global/header";
const MainMap = () => {
  // 더미 데이터
  const dummyData = [
    {
      title: "게시글 제목1",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56373715662199, lng: 127.18928068820057 },
    },
    {
      title: "게시글 제목2",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56023916024953, lng: 127.19060736808481 },
    },
    {
      title: "게시글 제목3",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.559192929653875, lng: 127.19127245819271 },
    },
    {
      title: "게시글 제목4",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56226360165682, lng: 127.19233291482071 },
    },
    {
      title: "게시글 제목5",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.54373715662199, lng: 127.18228068820057 },
    },
    {
      title: "게시글 제목6",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.56723916024953, lng: 127.16060736808481 },
    },
    {
      title: "게시글 제목7",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.559192923653875, lng: 127.19827245819271 },
    },
    {
      title: "게시글 제목8",
      content: "게시글 내용",
      images: "image배열",
      location: { lat: 37.54226360165682, lng: 127.26233291482071 },
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
  const [locationList, setLocationList] = useState(dummyData); // 데이터 리스트

  return (
    <MainMapWrapper>
      <Header></Header>
      <LocationList
        location={location}
        setLocation={setLocation}
        locationList={locationList}
      ></LocationList>
      <MainMapView
        location={location}
        setLocation={setLocation}
        locationList={locationList}
      ></MainMapView>
    </MainMapWrapper>
  );
};

export default MainMap;

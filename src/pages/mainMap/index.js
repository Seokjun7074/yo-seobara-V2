import { MainMapWrapper } from "./style";
import MainMapView from "../../components/mainMapPage/map";
import LocationList from "../../components/mainMapPage/locationList";
import { useEffect, useState } from "react";
import Header from "../../components/global/header";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __getPostLocation } from "../../redux/async/asyncPost";
const MainMap = () => {
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
  const [boundary, setBoundary] = useState(); // 보이는 지도 범위
  const dispatch = useDispatch();
  const locationList = useSelector((state) => state.post.location);
  // 위치정보 가져와서 서버에 목록 요청하기

  useEffect(() => {
    if (boundary) {
      dispatch(__getPostLocation(boundary));
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

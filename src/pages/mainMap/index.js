import { MainMapWrapper } from "./style";
import MainMapView from "../../components/mainMapPage/map";
import LocationList from "../../components/mainMapPage/locationList";
import { useEffect, useState } from "react";
import Header from "../../components/global/header";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __getPostLocation } from "../../redux/async/asyncPost";
import { initCreatePost } from "../../redux/modules/postSlice";
import useLocation from "../../hooks/useLocation";

const MainMap = () => {
  const [location] = useLocation();
  const [toggleCustomOverlay, setToggleCustomOverlay] = useState(false); // 지도에 오버레이 토글
  const [pickedLocation, setPickedLocation] = useState({
    postId: null,
    location: null,
  }); // 선택한 장소
  const [boundary, setBoundary] = useState(); // 보이는 지도 범위
  const dispatch = useDispatch();
  const locationList = useSelector((state) => state.post.location);

  useEffect(() => {
    if (boundary) {
      dispatch(__getPostLocation(boundary));
    }
  }, [boundary]);

  useEffect(() => {
    dispatch(initCreatePost()); // 작성상태 초기화
  }, []);

  return (
    <MainMapWrapper>
      <Header></Header>
      <LocationList
        location={location}
        locationList={locationList}
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
        setToggleCustomOverlay={setToggleCustomOverlay}
      ></LocationList>
      <MainMapView
        location={location}
        locationList={locationList}
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
        setBoundary={setBoundary}
        toggleCustomOverlay={toggleCustomOverlay}
        setToggleCustomOverlay={setToggleCustomOverlay}
      ></MainMapView>
    </MainMapWrapper>
  );
};

export default MainMap;

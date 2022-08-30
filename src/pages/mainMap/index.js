import { MainMapWrapper } from "./style";
import MainMapView from "../../components/mainMapPage/map";
import LocationList from "../../components/mainMapPage/locationList";
import { useState } from "react";

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
  return (
    <MainMapWrapper>
      <LocationList
        location={location}
        setLocation={setLocation}
      ></LocationList>
      <MainMapView location={location} setLocation={setLocation}></MainMapView>
    </MainMapWrapper>
  );
};

export default MainMap;

// 메인
// 지도 표시는 컴포넌트로 분리?
//
//

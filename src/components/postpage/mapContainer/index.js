import { useEffect, useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { getAddr } from "../../../utils/address";
import Spinner from "../../global/spinner";
import { MapContainerWrapper } from "./style";

const MapContainer = ({ pick, setPick }) => {
  const [location, setLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [address, setAddress] = useState("");
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
  // 좌표를 주소로 변환하는 부분
  // useEffect(() => {
  //   getAddr(pick.lat, pick.lng, setAddress);
  // }, [pick]);
  // console.log(address);
  return (
    <MapContainerWrapper>
      {location.isLoading ? (
        <Spinner />
      ) : (
        <Map
          center={{
            lat: location.center.lat,
            lng: location.center.lng,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          level={4}
          onClick={(_t, mouseEvent) =>
            setPick({
              ...pick,
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
          <MapMarker
            position={location.center}
            image={{
              src: `${process.env.PUBLIC_URL}/images/location_marker.png`, // 마커이미지의 주소입니다
              size: {
                width: 32,
                height: 32,
              }, // 마커이미지의 크기입니다
            }}
          />
          {pick && <MapMarker position={pick} />}
        </Map>
      )}
    </MapContainerWrapper>
  );
};

export default MapContainer;

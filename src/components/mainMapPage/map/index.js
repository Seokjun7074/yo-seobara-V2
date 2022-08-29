import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

const MainMapView = ({ location, setLocation }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
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
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);
  return (
    <>
      {location.isLoading ? (
        <h1>로딩중..나중에 스피너 넣을거~</h1>
      ) : (
        <Map
          center={location.center}
          style={{ width: "100%", height: "100vh" }}
        >
          <MapMarker position={location.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {location.errMsg ? location.errMsg : "여기에 계신가요?!"}
            </div>
          </MapMarker>
        </Map>
      )}
    </>
  );
};

export default MainMapView;

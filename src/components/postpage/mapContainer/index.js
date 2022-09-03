import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
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
  return (
    <MapContainerWrapper>
      {location.isLoading ? (
        <h1>로딩중..</h1>
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
          {pick && <MapMarker position={pick} />}
        </Map>
      )}
    </MapContainerWrapper>
  );
};

export default MapContainer;

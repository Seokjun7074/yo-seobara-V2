/*global kakao*/
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { BiCurrentLocation } from "react-icons/bi";
import { useEffect, useRef } from "react";
import {
  LocationButton,
  MarkerOverlay,
  NowLocation,
  SearchButton,
} from "./style";
import { useCallback } from "react";
const MainMapView = ({
  location,
  setLocation,
  locationList,
  pickedLocation,
  setPickedLocation,
  boundary,
  setBoundary,
}) => {
  // const [position, setPosition] = useState(null);
  const mapRef = useRef();
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
  }, [setLocation]);

  const searchPosition = () => {
    const map = mapRef.current;
    setBoundary({
      South_West: {
        lat: map.getBounds().getSouthWest().getLat(),
        lng: map.getBounds().getSouthWest().getLng(),
      },
      North_East: {
        lat: map.getBounds().getNorthEast().getLat(),
        lng: map.getBounds().getNorthEast().getLng(),
      },
    });
  };

  const onCreate = useCallback(() => {
    const map = mapRef.current;

    setBoundary({
      South_West: {
        lat: map.getBounds().getSouthWest().getLat(),
        lng: map.getBounds().getSouthWest().getLng(),
      },
      North_East: {
        lat: map.getBounds().getNorthEast().getLat(),
        lng: map.getBounds().getNorthEast().getLng(),
      },
    });
  }, []);

  return location.isLoading ? (
    <h1>로딩중..</h1>
  ) : (
    <Map
      isPanto="true"
      center={pickedLocation.postId ? pickedLocation.location : location.center}
      level={4}
      style={{ width: "100%", height: "100%" }}
      ref={mapRef}
      onCreate={onCreate}
    >
      <SearchButton onClick={searchPosition}>현 지도에서 검색</SearchButton>
      <LocationButton
        onClick={() => {
          setPickedLocation({ postId: null, location: location.center });
        }}
      >
        <BiCurrentLocation size={"40px"} color={"white"} />
      </LocationButton>
      <MapMarker
        position={location.center}
        image={{
          src: `${process.env.PUBLIC_URL}/images/location_marker.png`, // 마커이미지의 주소입니다
          size: {
            width: 32,
            height: 32,
          }, // 마커이미지의 크기입니다
        }}
      >
        {/* <NowLocation>
          {location.errMsg ? location.errMsg : "현재위치"}
        </NowLocation> */}
      </MapMarker>
      {locationList.map((data) => (
        <div key={data.postId}>
          <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
            position={data.location}
          >
            {data.postId === pickedLocation.postId && <MarkerOverlay />}
          </CustomOverlayMap>
          <MapMarker
            position={data.location}
            onClick={() => {
              setPickedLocation({
                postId: data.postId,
                location: data.location,
              });
            }}
          ></MapMarker>
        </div>
      ))}
    </Map>
  );
};

export default MainMapView;

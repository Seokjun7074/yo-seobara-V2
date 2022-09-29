import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { BiCurrentLocation } from "react-icons/bi";
import { useRef } from "react";
import { ImageContainer, LocationButton, SearchButton } from "./style";
import { useCallback } from "react";
import "./style.css";
import Spinner from "../../global/spinner";
import LocatioinSpot from "../../global/locationSpot";

const MainMapView = ({
  location,
  locationList,
  pickedLocation,
  setPickedLocation,
  setBoundary,
  toggleCustomOverlay,
  setToggleCustomOverlay,
}) => {
  const mapRef = useRef();
  const searchPosition = () => {
    const map = mapRef.current;
    setBoundary({
      bounds: {
        South_West: {
          lat: map.getBounds().getSouthWest().getLat(),
          lng: map.getBounds().getSouthWest().getLng(),
        },
        North_East: {
          lat: map.getBounds().getNorthEast().getLat(),
          lng: map.getBounds().getNorthEast().getLng(),
        },
      },
    });
  };

  const onCreate = useCallback(() => {
    const map = mapRef.current;

    setBoundary({
      bounds: {
        South_West: {
          lat: map.getBounds().getSouthWest().getLat(),
          lng: map.getBounds().getSouthWest().getLng(),
        },
        North_East: {
          lat: map.getBounds().getNorthEast().getLat(),
          lng: map.getBounds().getNorthEast().getLng(),
        },
      },
    });
  }, []);

  return location.isLoading ? (
    <Spinner /> // 로딩중에 보여줄 스피너 컴포넌트
  ) : (
    <Map
      isPanto="true"
      center={
        pickedLocation.location ? pickedLocation.location : location.center
      }
      level={4}
      style={{ width: "100%", height: "100%" }}
      ref={mapRef}
      onCreate={onCreate}
      onClick={(_t, mouseEvent) => {
        setPickedLocation({
          ...pickedLocation,
          postId: null,
        });
      }}
    >
      <SearchButton onClick={searchPosition}>현 지도에서 검색</SearchButton>
      <LocationButton
        onClick={() => {
          setToggleCustomOverlay(false);
          setPickedLocation({ postId: null, location: location.center });
        }}
      >
        <BiCurrentLocation size={"30px"} color={"white"} />
      </LocationButton>
      {/* 현재위치 마커 */}
      <CustomOverlayMap position={location.center}>
        <LocatioinSpot />
      </CustomOverlayMap>

      {locationList.map((data) => (
        <div key={data.postId}>
          <MapMarker
            position={data.location}
            onClick={() => {
              setToggleCustomOverlay(true);
              setPickedLocation({
                postId: data.postId,
                location: data.location,
              });
            }}
          />
          {data.postId === pickedLocation.postId && toggleCustomOverlay ? (
            <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
              position={data.location}
            >
              <div className="balloon">
                <ImageContainer src={`${data.thumbnailUrl}`} />
              </div>
            </CustomOverlayMap>
          ) : null}
        </div>
      ))}
    </Map>
  );
};

export default MainMapView;

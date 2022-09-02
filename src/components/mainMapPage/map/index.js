import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect } from "react";
import { NowLocation } from "./style";
const MainMapView = ({
  location,
  setLocation,
  locationList,
  setPickedLocation,
}) => {
  // const [position, setPosition] = useState(null);
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
  // console.log(locationList);

  return location.isLoading ? (
    <h1>로딩중..</h1>
  ) : (
    <Map
      center={location.center}
      level={4}
      style={{ width: "100%", height: "100%" }}
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
      >
        {/* <NowLocation>
          {location.errMsg ? location.errMsg : "현재위치"}
        </NowLocation> */}
      </MapMarker>
      {locationList.map((data) => (
        <MapMarker
          key={data.postId}
          position={data.location}
          onClick={() => {
            setPickedLocation(data.postId);
          }}
        ></MapMarker>
      ))}
    </Map>
  );
};

export default MainMapView;

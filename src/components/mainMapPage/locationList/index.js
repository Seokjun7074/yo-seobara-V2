import { useEffect, useRef } from "react";
import ContentContainer from "../contentContainer";
import { LocationListWrapper } from "./style";

const LocationList = ({
  location,
  locationList,
  pickedLocation,
  setPickedLocation,
}) => {
  const scrollControl = useRef([]);
  useEffect(() => {
    scrollControl.current[pickedLocation.postId]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [pickedLocation]);
  // 현재위치를 통해 정보 로딩
  // console.log(scrollControl);
  return location.isLoading ? null : (
    <LocationListWrapper>
      {locationList.map((data) => (
        <div
          key={data.postId}
          className={data.postId}
          onClick={() => {
            setPickedLocation({ postId: data.postId, location: data.location });
          }}
          ref={(e) => (scrollControl.current[data.postId] = e)}
        >
          <ContentContainer
            picked={pickedLocation.postId === data.postId}
            data={data}
          ></ContentContainer>
        </div>
      ))}
    </LocationListWrapper>
  );
};

export default LocationList;

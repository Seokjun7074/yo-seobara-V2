import { useEffect, useRef } from "react";
import ContentContainer from "../contentContainer";
import { LocationListWrapper } from "./style";

const LocationList = ({
  location,
  locationList,
  pickedLocation,
  setPickedLocation,
}) => {
  // const scrollControl = useRef([]);

  // 현재위치를 통해 정보 로딩
  return location.isLoading ? null : (
    <LocationListWrapper>
      {locationList.map((data) => (
        <div
          key={data.postId}
          className={data.postId}
          // ref={(el) => {
          //   // console.log(el);
          //   scrollControl.current.push(el);
          // }}
          onClick={() => {
            setPickedLocation(data.postId);
          }}
        >
          <ContentContainer
            picked={pickedLocation === data.postId}
            data={data}
          ></ContentContainer>
        </div>
      ))}
    </LocationListWrapper>
  );
};

export default LocationList;

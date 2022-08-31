import ContentContainer from "../contentContainer";
import { HiddenContainer, LocationListWrapper } from "./style";

const LocationList = ({ location, setLocation, locationList }) => {
  // 현재위치를 통해 정보 로딩
  return location.isLoading ? null : (
    <LocationListWrapper>
      {locationList.map((data) => (
        <ContentContainer data={data}></ContentContainer>
      ))}
    </LocationListWrapper>
  );
};

export default LocationList;

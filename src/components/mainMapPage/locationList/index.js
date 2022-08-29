import { LocationListWrapper } from "./style";

const LocationList = ({ location }) => {
  // 현재위치를 통해 정보 로딩
  return (
    <>
      {location.isLoading ? null : <LocationListWrapper></LocationListWrapper>}
    </>
  );
};

export default LocationList;

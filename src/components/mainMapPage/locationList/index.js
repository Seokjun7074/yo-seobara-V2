import Modal from "../../global/modal";
import { LocationListWrapper } from "./style";

const LocationList = ({ location, setLocation }) => {
  // 현재위치를 통해 정보 로딩
  return (
    <>
      {location.isLoading ? null : (
        <LocationListWrapper>
          <Modal btn_title="모달버튼">모달등장</Modal>
        </LocationListWrapper>
      )}
    </>
  );
};

export default LocationList;

import { AddressInputBox, InputBox } from "./style";
import { BiSearch } from "react-icons/bi";
import useInput from "../../../hooks/useInput";
import { apis } from "../../../api/postAPI";

const AddressSearchContainer = ({ pick, setPick }) => {
  const [addressInput, changeAddressInput] = useInput();

  const changeAddressToLocation = async () => {
    const res = await apis.convertToLocation(addressInput);
    const resData = res.data.data;
    if (resData.lat === 0 || resData.lng === 0) {
      alert("해당 주소를 찾을 수 없습니다");
      return;
    } else {
      setPick((prev) => ({
        ...prev,
        lat: resData.lat,
        lng: resData.lng,
      }));
    }
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      changeAddressToLocation();
    }
  };
  return (
    <AddressInputBox>
      <BiSearch size={"30px"} color={"#333333"} />
      <InputBox
        type={"text"}
        placeholder={"주소를 검색해주세요      ex) 삼성동"}
        onChange={changeAddressInput}
        onKeyPress={onKeyPress}
      />
    </AddressInputBox>
  );
};

export default AddressSearchContainer;

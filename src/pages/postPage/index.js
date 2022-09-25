import { PostPageWrapper, CenterContainer } from "./style";
import InputContainer from "../../components/postpage/inputContainer";
import MapContainer from "../../components/postpage/mapContainer";
import { useState } from "react";
const PostPage = () => {
  const [pick, setPick] = useState({ lat: null, lng: null }); // 사용자가 위치 지정한 곳의 좌표
  const [pickedAddress, setPickAddress] =
    useState("주소에서 위치를 찍어주세요!"); // 사용자가 위치 지정한 곳의 좌표

  return (
    <PostPageWrapper>
      <CenterContainer>
        <MapContainer
          pick={pick}
          setPick={setPick}
          pickedAddress={pickedAddress}
          setPickAddress={setPickAddress}
        ></MapContainer>
        <InputContainer
          pick={pick}
          pickedAddress={pickedAddress}
        ></InputContainer>
      </CenterContainer>
    </PostPageWrapper>
  );
};

export default PostPage;

import { PostPageWrapper, CenterContainer } from "./style";
import InputContainer from "../../components/postpage/inputContainer";
import MapContainer from "../../components/postpage/mapContainer";
import { useState } from "react";
const PostPage = () => {
  const [pick, setPick] = useState({}); // 사용자가 위치 지정한 곳의 좌표
  // console.log("pick: ", pick);
  return (
    <PostPageWrapper>
      <CenterContainer>
        <MapContainer pick={pick} setPick={setPick}></MapContainer>
        <InputContainer pick={pick}></InputContainer>
      </CenterContainer>
    </PostPageWrapper>
  );
};

export default PostPage;

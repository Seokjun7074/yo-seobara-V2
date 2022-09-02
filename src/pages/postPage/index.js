import { PostPageWrapper, CenterContainer } from "./style";
import InputContainer from "../../components/postpage/inputContainer";
import MapContainer from "../../components/postpage/mapContainer";
const PostPage = () => {
  return (
    <PostPageWrapper>
      <CenterContainer>
        <MapContainer></MapContainer>
        <InputContainer></InputContainer>
      </CenterContainer>
    </PostPageWrapper>
  );
};

export default PostPage;

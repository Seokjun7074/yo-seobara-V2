import { ContentContainerWrapper } from "./style";
import { getAddr } from "../../../utils/address";
// {
//   title: "게시글 제목7",
//   content: "게시글 내용",
//   images: "image배열",
//   location: { lat: 37.559192923653875, lng: 127.19827245819271 },
// },

const ContentContainer = ({ data, picked }) => {
  // const address = getAddr(data.location.lat, data.location.lng);
  return (
    <ContentContainerWrapper picked={picked}>
      {data.title}
    </ContentContainerWrapper>
  );
};

export default ContentContainer;

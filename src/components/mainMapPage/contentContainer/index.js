import { ContentAddress, ContentContainerWrapper, ContentTitle } from "./style";

const ContentContainer = ({ data, picked }) => {
  return (
    <ContentContainerWrapper picked={picked}>
      <ContentTitle picked={picked}>{data.title}</ContentTitle>
      <ContentAddress picked={picked}> {data.address}</ContentAddress>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;

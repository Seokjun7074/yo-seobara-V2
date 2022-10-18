import { Address, Content, ContentContainerWrapper, Title } from "./style";

const ContentContainer = ({ data, picked }) => {
  return (
    <ContentContainerWrapper picked={picked}>
      <Title picked={picked}>{data.title}</Title>
      <Address picked={picked}>📌 {data.address}</Address>
      <Content picked={picked}>🔍 {data.content}</Content>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;

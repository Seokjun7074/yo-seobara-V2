import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 60vw;
  /* padding: ${(props) => props.theme.padding.xlarge} 0; */
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserInfoWrapper = styled.div`
  height: 10%;
  padding: 10px ${(props) => props.theme.padding.large};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;
export const UserText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${(props) =>
    props.clickable ? props.theme.color.blue : props.theme.color.darkgray};
  cursor: ${(props) => (props.clickable ? "pointer" : "null")};
`;
export const UserButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserButton = styled.button`
  width: 60px;
  height: 35px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.lightgray};
  color: ${(props) => props.theme.color.blue};
`;
export const SliderWrapper = styled.div`
  height: 70%;
  width: 100%;
`;
export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const ContentLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  font-weight: 600;
  color: ${(props) => props.theme.color.blue};
`;
export const ContentWrapper = styled(ContentLabel)`
  border-radius: 5px;
  /* box-shadow: 1px 1px 2px rgb(0 0 0 / 10%); */
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.color.darkgray};
`;

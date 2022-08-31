import styled from "styled-components";

export const ContentContainerWrapper = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.picked ? "tomato" : "white")};
  padding: ${(props) => props.theme.padding.xlarge};
  min-height: 100px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  text-align: left;
  font-weight: 600;
  transition: 0.3s;
`;

import styled from "styled-components";

export const ContentContainerWrapper = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.picked ? "#0584BB" : "white")};
  color: ${(props) => (props.picked ? "white" : "black")};
  padding: ${(props) => props.theme.padding.xlarge};
  min-height: 100px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  text-align: left;
  font-weight: 600;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

export const ContentTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => (props.picked ? "white" : "black")};
`;

export const ContentAddress = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: ${(props) => (props.picked ? "#E9E9E9" : "#333333")};
`;

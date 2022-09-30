import styled from "styled-components";

export const ContentContainerWrapper = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.picked ? "#0584BB" : "white")};
  color: ${(props) => (props.picked ? "white" : "black")};
  padding: ${(props) => props.theme.padding.xlarge};
  height: 110px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  text-align: left;
  font-weight: 600;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    scale: 1.03;
  }
`;

export const Title = styled.h3`
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => (props.picked ? "white" : "#0584BB")};
`;

export const Address = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: ${(props) => (props.picked ? "#E9E9E9" : "gray")};
`;

export const Content = styled.p`
  display: block;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${(props) => (props.picked ? "#E9E9E9" : "#333333")};
  overflow: hidden;
  text-overflow: ellipsis;
`;

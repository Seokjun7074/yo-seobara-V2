import styled from "styled-components";

export const LocationListWrapper = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: ${(props) => props.theme.padding.large};
  background-color: transparent;
  width: 25vw;
  min-width: 300px;
  height: 100vh;
  z-index: 10;
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

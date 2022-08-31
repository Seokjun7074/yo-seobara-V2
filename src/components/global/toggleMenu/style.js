import styled from "styled-components";

export const ToggleMenuWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  cursor: pointer;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
export const ToggleMenuContainer = styled.div`
  position: fixed;
  right: ${(props) => (props.isOpen ? "0" : "-20vw")};
  top: 0;
  height: 100vh;
  width: 20vw;
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: 0.3s;
`;

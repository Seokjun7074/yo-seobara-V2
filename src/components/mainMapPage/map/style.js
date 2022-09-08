import styled from "styled-components";

export const NowLocation = styled.div`
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
`;
export const SearchButton = styled.button`
  position: fixed;
  bottom: 7%;
  margin: 0 auto;
  padding: 5px;
  left: 0;
  right: 0;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  background-color: lightcoral;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const LocationButton = styled.div`
  height: 50px;
  position: fixed;
  left: 20px;
  bottom: 7%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
  border-radius: 50%;
  padding: 5px;
  /* background-color: ${(props) => props.theme.color.darkgray}; */
  background-color: lightcoral;
  cursor: pointer;
`;

export const MarkerOverlay = styled.div`
  position: relative;
  bottom: 145px;
  right: 100px;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: lightgray;
`;

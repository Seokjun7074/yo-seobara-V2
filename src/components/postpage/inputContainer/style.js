import styled from "styled-components";

export const InputContainerWrapper = styled.div`
  /* height: 100%; */
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightblue; */
`;

export const ImageInputButton = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const InputText = styled.input`
  background-color: lightgray;
  height: 30px;
  padding: 5px;
  width: 60%;
  border-radius: 10px;
`;

import styled from "styled-components";

export const AddressInputBox = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
`;

export const InputBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
`;

import styled from "styled-components";

export const FormBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
`;
export const Form = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
`;

export const FormButton = styled.button`
  width: 60px;
  height: 35px;
  font-weight: 600;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.blue};
  color: white;
`;

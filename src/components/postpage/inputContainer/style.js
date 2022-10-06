import styled from "styled-components";

export const InputContainerWrapper = styled.div`
  width: 80%;
  min-width: 500px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ImageInputButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const PhotoBox = styled.div`
  height: 300px;
  min-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const InputBox = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LabelBox = styled.div`
  /* height: 50%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const Label = styled.label`
  font-weight: 600;
`;
export const InputText = styled.input`
  background-color: ${(props) => props.theme.color.lightgray};
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`;
export const InputTextArea = styled.textarea`
  background-color: ${(props) => props.theme.color.lightgray};
  width: 100%;
  min-height: 100px;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;
export const TextArea = styled.div`
  background-color: ${(props) => props.theme.color.lightgray};
  width: 100%;
  min-height: 40px;
  max-height: 70px;
  height: 100%;
  /* padding: 10px; */
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.3rem;
  overflow: scroll;
`;
export const SubmitButton = styled.button`
  /* position: relative;
  bottom: -30px; */
  /* background-color: ${(props) => props.theme.color.darkgray}; */
  margin-top: 20px;
  background-color: tomato;
  width: 80%;
  height: 50px;
  border-radius: 20px;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
`;
export const LoadingButton = styled(SubmitButton)`
  cursor: progress;
`;

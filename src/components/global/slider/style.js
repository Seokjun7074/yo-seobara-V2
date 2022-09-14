import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 500px;
  height: 250px;
  /* border: 1px solid gray; */
  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
`;
export const ButtonContainer = styled.div`
  width: 50px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ImagePreviewWrapper = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
`;
export const PreviewContainer = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
`;

export const ImagePreview = styled.div`
  width: 400px;
  height: 250px;
  /* border-radius: 10px; */
  overflow: hidden;
  flex: none;
`;

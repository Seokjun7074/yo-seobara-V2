import styled from "styled-components";

export const SliderWrapper = styled.div`
  /* width: 500px; */
  /* height: 250px; */
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
`;
export const ButtonContainer = styled.div`
  width: 50px;
  /* height: 250px; */
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ImagePreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PreviewContainer = styled.div`
  /* width: 400px; */
  /* height: 250px; */
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ImagePreview = styled.div`
  /* width: 400px; */
  /* height: 250px; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: none;
`;
export const DeleteButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.lightgray};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
`;
export const MouseOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.mouseOver ? "null" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
`;

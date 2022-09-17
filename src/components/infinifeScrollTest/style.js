import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 300px;
  width: 250px;
  background-color: lightgray;
  overflow: hidden;
  border-radius: 10px;
`;
export const CheckBar = styled.div`
  height: 1px;
  background-color: transparent;
`;
export const ImageWrapper = styled.img`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  image-rendering: -moz-crisp-edges; /* firefox */
  image-rendering: -o-crisp-edges; /* opera */
  image-rendering: -webkit-optimize-contrast; /* chrome(비표준) */
  image-rendering: crisp-edges;

  &:hover {
    transform: scale(1.02);
  }
`;

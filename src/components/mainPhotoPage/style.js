import styled from "styled-components";

export const Box = styled.div`
margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;

`;


export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  transition: all 0.3s ease;   
  image-rendering: -moz-crisp-edges; /* firefox */
  image-rendering: -o-crisp-edges; /* opera */
  image-rendering: -webkit-optimize-contrast; /* chrome(비표준) */
  image-rendering: crisp-edges;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CheckBar = styled.div`
  height: 1px;
  background-color: transparent;
`;
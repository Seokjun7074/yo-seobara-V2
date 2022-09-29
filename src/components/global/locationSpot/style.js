import styled, { keyframes } from "styled-components";

const animation = keyframes`
	0%{
        opacity:1;
        transform: scale(0.3);
    }    
    100%{
        opacity:0;
        transform: scale(1.5);
    }
`;

export const SpotWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const Spot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -9px 0 0 -9px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: red;
  border: 2px solid white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

export const SpotAnimation = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  animation: ${animation} 2s 0.1s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

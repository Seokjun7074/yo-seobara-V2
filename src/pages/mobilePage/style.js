import styled from "styled-components";

export const MobilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.color.blue};
`;

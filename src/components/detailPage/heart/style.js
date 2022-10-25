import styled from "styled-components";

export const HeartWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const HeartCount = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

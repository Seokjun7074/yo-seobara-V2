import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  /* background-color: wheat; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.padding.xlarge};
`;
export const HeaderTitle = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;
export const HeaderMenu = styled.button`
  padding: ${(props) => props.theme.padding.xlarge};
`;

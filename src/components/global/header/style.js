import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.padding.base};
  background-color: white;
`;
export const HeaderTitle = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;
export const LogoBox = styled.img`
  height: 100%;
  border-radius: 10px;
`;
export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const AnonymousButton = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.lightgray};
  color: ${(props) => props.theme.color.blue};
  padding: ${(props) => props.theme.padding.base};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  cursor: pointer;
`;

export const LoginedButton = styled(AnonymousButton)`
  display: ${(props) => (props.isLogin ? null : "none")};
`;
export const LogineButton = styled(AnonymousButton)`
  display: ${(props) => (props.isLogin ? "none" : null)};
`;
export const LogoutButton = styled(AnonymousButton)`
  display: ${(props) => (props.isLogin ? null : "none")};
`;

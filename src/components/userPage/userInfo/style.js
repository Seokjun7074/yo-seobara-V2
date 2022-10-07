import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Nickname = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;
export const UserInfoBox = styled.div`
  width: 70%;
  /* height: 100px; */
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: center;
  gap: 20px;
  padding: 10px;
  /* background-color: lightgray; */
`;
export const TotalElements = styled(Nickname)``;
export const FollowButton = styled.button`
  display: ${(props) => (props.isMyPage ? "none" : null)};
  padding: ${(props) => props.theme.padding.base};
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  width: 15%;
  min-width: 70px;
  border-radius: 20px;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;

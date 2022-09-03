import styled from "styled-components";

export const CenterContainer = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  width: 70%;
  min-width: 800px;
  height: 100%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const PostPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.lightgray};
`;

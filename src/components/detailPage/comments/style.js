import styled from "styled-components";

export const CommentListWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CommentBox = styled.div`
  width: 70%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  background-color: ${(props) => props.theme.color.lightgray};
`;

export const UserBox = styled.div`
  width: 30%;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 600;
  color: ${(props) => props.theme.color.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Comment = styled.div`
  width: 65%;
  height: 100%;
  font-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Side = styled.div`
  width: 15%;
  height: 100%;
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSizes.xlarge};

  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "top "
    "footer ";
`;

export const DeleteBox = styled.div`
  grid-area: top;
  width: 100%;
  height: 70%;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  display: flex;
  justify-content: center;
  align-items: center;

  // border:1px solid ${(props) => props.theme.color.orange};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.orange};
  position: relative;
`;

export const Time = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const NoCommentBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: ${(props) => props.theme.padding.large};
  font-size: ${(props) => props.theme.margin.xlarge};
  color: ${(props) => props.theme.color.blue};
  font-weight: 700;
`;

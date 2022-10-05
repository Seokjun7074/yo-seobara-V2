import styled from "styled-components";


export const Text = styled.p`
width: 100%;
height: 100%;
font-family:inherit;
font-size: ${(props)=>props.theme.margin.xlarge};
`;


export const CommentBox = styled.div`
  margin-bottom: 10px;
  border-radius: 10px;
  border:1px solid ${(props) => props.theme.color.darkgray};
  width: 100%;
  height: 20%;
  display:flex;
`;

export const UserBox = styled.div`
  width: 20%;
  height: 100%;
  border:1px solid red;
  border-radius: 10px;
  font-size: ${(props)=>props.theme.fontSizes.xlarge};
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const Comment = styled.div`
width: 65%;
height: 100%;
font-size: 100%;
display : flex;
justify-content : center;
align-items : center;
`;

export const Side = styled.div`
  width: 15%;
  height: 100%;
  border:1px solid ${(props) => props.theme.color.blue};
  border-radius: 10px;
  font-size: ${(props)=>props.theme.fontSizes.xlarge};

  display: grid;
grid-template-columns: 2fr ;
grid-template-rows:1fr 1fr;
grid-template-areas:
'top '
'footer '

`;


export const DeleteBox = styled.div`
grid-area:top;
width: 100%;
height: 70%;
font-size: ${(props)=>props.theme.fontSizes.xlarge};
display : flex;
justify-content : center;
align-items : center;

// border:1px solid ${(props) => props.theme.color.orange};
border-radius: 10px;
background-color:${(props) => props.theme.color.orange};
position: relative;
`;

export const Time = styled.div`
grid-area:footer;
width: 100%;
height: 50%;
font-size: 70%;
display : flex;
justify-content : center;
align-items : center;



`;



export const NoCommentBox = styled.div`
  width: 100%;
  height: 100%;
  border:1px solid ${(props)=>props.theme.color.blue};
  border-radius: 10px;
  padding: ${(props)=>props.theme.padding.xlarge};
  font-size: ${(props)=>props.theme.margin.xlarge};
`;
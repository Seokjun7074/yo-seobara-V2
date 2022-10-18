import styled from "styled-components";


export const BodyBox = styled.div`


height:100%;
display: grid;
grid-template-columns: 2fr ;
grid-template-rows:1fr 2fr 3fr 4fr 1fr;
grid-template-areas:
'top side'
'header header'
'title title'
'main main'
'footer footer'
`;

export const BodyTop = styled.div`
grid-area:top;
border:1px solid ${(props) => props.theme.color.blue};
display : flex;
justify-content : center;
align-items : center;

`;

export const BodySide = styled.div`
grid-area:side;
border:1px solid ${(props) => props.theme.color.blue};



`;

export const BodyHeader = styled.div`
grid-area:header;
overflow: auto;
display: flex;
border:1px solid ${(props) => props.theme.color.blue};
`;
export const BodyTitle = styled.div`
grid-area:title;
border:1px solid ${(props) => props.theme.color.blue};
`;

export const BodyMain = styled.div`
grid-area:main;
overflow:auto;
border-radius:2px;
border:1px solid ${(props) => props.theme.color.blue};
`;


export const Footer = styled.div`
grid-area:footer;
border-radius:1px;
border:1px solid ${(props) => props.theme.color.blue};
display : flex;
justify-content : center;
align-items : center;

`;
export const Time = styled.p`
font-size: 17px;

`;

export const UseName = styled.div`
font-size: 17px;
background-color:${(props) => props.theme.color.blue}; 
`;
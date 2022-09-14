import styled from "styled-components";


export const BodyBox = styled.div`


height:100%;
// padding:10px;
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows:1fr 1fr 2fr 5fr;
grid-template-areas:
'top side'
'header header'
'title title'
'main main'
// background-color: black;
// overflow: auto;
`;

export const BodyTop = styled.div`
grid-area:top;
background-color: black;


`;

export const BodySide = styled.div`
grid-area:side;

// overflow: auto;
// max-height:50%;
// display: flex;

// position: relative;




`;

export const BodyHeader = styled.div`
grid-area:header;
background-color: blue;
overflow: auto;
display: flex;
`;
export const BodyTitle = styled.div`
grid-area:title;
background-color: red;
`;

export const BodyMain = styled.div`
grid-area:main;
background-color: blue;
overflow:auto;
border-radius:1px;
border:1px solid black;
`;




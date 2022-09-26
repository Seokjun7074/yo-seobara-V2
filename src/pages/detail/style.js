import styled from "styled-components";


export const DetailBox = styled.div`
width:70vw;
height:80vh;
max-height:80vh;

display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows:5fr 1fr 3fr;
grid-template-areas:
'main side'
'header header'
'footer footer'
`;


export const DetailMain = styled.div`
grid-area:main;
width: 100%;
height: 350px;

`;

export const Detailside = styled.div`
grid-area:side;
max-height:100%;
background-color: yellow;
overflow:auto;
width: 100%;
height: 100%;

`;

export const DetailHeader = styled.div`
grid-area:header;
width: 100%;
height: 100%;

`;


export const DetailFooter = styled.div`
grid-area:footer;
overflow:auto;
width: 100%;
height: 100%;

`;




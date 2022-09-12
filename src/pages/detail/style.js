import styled from "styled-components";

export const Card = styled.div`
  width: 700px;
  height: 400px;
  max-height: 400px;
  // min-height: 50vh;
  display: flex;
  flex-direction: column;
  background-color: red;
  position: relative;
`;

export const Box = styled.div`
width: 100%;
height: 100%;
// max-height: 30vh;
// // min-height: 30vh;
// display: flex;
// flex-direction: column;
background-color: red;

`;

export const DetailBox = styled.div`
width:50vw;
height:80vh;
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows:5fr 1fr 3fr;
grid-template-areas:
'main side'
'header header'
'footer footer'
`;
export const DetailHeader = styled.div`
grid-area:header;

// display: block;

`;

export const DetailMain = styled.div`
grid-area:main;
background-color: blue;
padding:auto;

`;

export const Detailside = styled.div`
grid-area:side
background-color: red;
`;

export const DetailFooter = styled.div`
grid-area:footer;
overflow:auto;

`;




import styled from "styled-components";


export const FormBox = styled.div`
width:100%;
// height:80vh;
display: grid;
grid-template-columns: 5fr 1fr;
grid-template-areas:
'form side'

`;
export const Form = styled.div`
grid-area:form;
overflow:auto;





`;

export const FormButton = styled.div`
grid-area:side;



`;
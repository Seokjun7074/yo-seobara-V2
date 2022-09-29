import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={`${process.env.PUBLIC_URL}/images/spinner.gif`} alt="" />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

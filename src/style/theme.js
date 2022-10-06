const fontSizes = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  title: "3rem",
};
const padding = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  xxlarge: "3rem",
};
const margin = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  xxlarge: "3rem",
};
const color = {
  lightgray: "#E9E9E9",
  darkgray: "#333333",
  blue: "#0584BB",
};

const theme = {
  fontSizes,
  padding,
  margin,
  color,
};

export default theme;

// 사용법(styled-components에서 사용 가능)

// export const YourComponent = styled.div`
//   width: 100%;
//   height: 40px;
//   background-color: ${(props) => props.theme.color.blue};
//   padding: ${(props) => props.theme.padding.xlarge};
// `;

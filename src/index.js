import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import GlobalStyle from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);

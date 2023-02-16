import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import store from "./state/store";
import {ThemeProvider} from "@mui/material/styles"
import theme from "./ThemeConfig"


const app = (
  // <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  // </Provider>
);

const target = document.getElementById("root");

ReactDOM.render(app, target);



import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/template/custom.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

//App.contextTypes = {
  //store: PropTypes.object.isRequired
//}

const store = createStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducers from "./store/reducers";

let store;

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
} else {
  store = createStore(rootReducers, applyMiddleware(thunk));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

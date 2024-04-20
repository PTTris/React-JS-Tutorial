import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import "nprogress/nprogress.css";
import * as mdb from "mdb-ui-kit"; // lib
import Layout from "./Layout";
window.mdb = mdb;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

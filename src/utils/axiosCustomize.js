import axios from "axios";
import NProgress from "nprogress";
import { store } from "../redux/store";

NProgress.configure({ trickleSpeed: 50, showSpinner: false });

const instance = axios.create({
    baseURL: "http://localhost:8081/api/",
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        const accessToken = store.getState()?.user?.account?.access_token;
        config.headers["Authorization"] = "Bearer " + accessToken;
        NProgress.start();
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Loading bar
        NProgress.done();
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response && response.data ? response.data : response;
    },
    function (error) {
        NProgress.done();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return error && error.response && error.response.data
            ? error.response.data
            : Promise.reject(error);
    }
);

export default instance;

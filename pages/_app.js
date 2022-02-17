/* eslint-disable react/jsx-filename-extension */
import React from "react";
import App from "next/app";
import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";
import SEO from "../next-seo.config";
import store from "../store/store";
import theme from "../theme/theme";
// import { setToken, setWallet } from "../store/slices/user.slice";
// import {setLoading} from "../store/slices/loading.slice";
// import { openNotification } from "../components/notify";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["x-api-key"] = process.env.NEXT_PUBLIC_API_KEY;

// axios.interceptors.request.use(
//   (config) => {
//     let accessToken = store.getState().user.user?.data?.accessToken;

//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     // if (config.meta?.enableLoading) {
//     //   store.dispatch(setLoading(true));
//     // }

//     return config;
//   },
//   (error) => {
//     // if (error?.meta?.enableLoading) {
//     //   store.dispatch(setLoading(false));
//     // }

//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     if (response.config.meta?.success?.showNotification) {
//       openNotification({
//         type: "success",
//         message: "Success",
//         description: response.data.message,
//       });
//     }
//     if (response.config.meta?.refresh) {
//       axios({
//         url: `/api/v1/users/me`,
//         method: "get",
//       }).then((res) => {
//         return store.dispatch(setWallet(res.data.data.wallet));
//       });
//     }

//     // if (response.config.meta?.enableLoading) {
//     //   store.dispatch(setLoading(false));
//     // }

//     // FIXME: to be removed later, Already replaced with callbacks
//     if (response.config.meta?.callback) {
//       response.config.meta.callback();
//     }

//     // if (response.config.meta?.callbacks?.length > 0) {
//     //   for (const item of response.config.meta.callbacks) {
//     //     item.callback();
//     //   }
//     // }

//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config || error.response?.config;
//     const userStore = store.getState().user.user;

//     let refreshToken = userStore?.refreshToken;

//     if (
//       refreshToken &&
//       error.response?.status === 401 &&
//       error.response?.data.data.includes("TokenExpiredError") &&
//       !originalRequest?._retry
//     ) {
//       originalRequest._retry = true;
//       const res = await axios({
//         url: `/api/v1/users/refresh-token?refreshToken=${refreshToken}`,
//         method: "get",
//       });

//       store.dispatch(setToken(res.data.data.accessToken));

//       return axios(originalRequest);
//     }

//     if (originalRequest?.meta?.error?.showNotification) {
//       let message = error.response?.data?.message || "Network Error";
//       if (error.response?.status === 404) {
//         message = error.response?.statusText;
//       }

//       openNotification({
//         type: "error",
//         message: "Error",
//         description: message,
//       });
//     }

//     // if (originalRequest?.meta?.enableLoading) {
//     //   store.dispatch(setLoading(false));
//     // }

//     return Promise.reject(error);
//   }
// );

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;

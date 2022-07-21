import { initializeAxios } from "../utils/axios";

export default function ({ $axios, redirect }: any) {
  $axios.defaults.baseURL = "https://localhost:8000";
  $axios.interceptors.request.use(
    (config: any) => {
      config.headers.common.Accept = "application/json";
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  $axios.onError((error: any) => {
    if (error.response.status === 500) {
      redirect("/page404");
    } else if (error.response.status === 400) {
      // redirect('/page404')
    } else if (error.response.status === 401) {
      redirect("/login");
    }
  });

  // for get type axios instance, this code should be end of function
  initializeAxios($axios);
}

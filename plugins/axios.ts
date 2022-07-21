export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = "https://localhost:8000";
  $axios.interceptors.request.use(
    (config) => {
      config.headers.common.Accept = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect("/page404");
    } else if (error.response.status === 400) {
      // redirect('/page404')
    } else if (error.response.status === 401) {
      redirect("/login");
    }
  });
}

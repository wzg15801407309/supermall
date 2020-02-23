import axios from "axios";
export function request(config) {
  //1、创建axios 实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 1000
  });
  //2拦截器
  //2.1、请求拦截作用
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      window.console.log("请求拦截报错", err);
    }
  );
  //2.2响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      window.console.log("响应出错", err);
    }
  );
  //3、真正的网络请求,是一个promise
  return instance(config);
}

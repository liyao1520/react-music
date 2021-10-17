import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
const instence = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
//请求拦截器
instence.interceptors.request.use(
  (config) => {
    //do ...

    return config;
  },
  (err) => {
    err && console.log("====request err拦截器====" + err);
  }
);
//响应拦截器
instence.interceptors.response.use(
  (res) => {
    //do ...

    return res.data;
  },
  (err) => {
    err && console.log("====response err拦截器====" + err);
  }
);
export default instence;

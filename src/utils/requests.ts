import axios, { AxiosRequestConfig } from "axios";
import { notification } from "ant-design-vue";
import { axiosConfig } from "../config/axios";
import store from "../store";
import router from "../router";

interface ResponseDataType {
  code: number;
  message: string;
  description?: string;
}

const handleCode = (data: ResponseDataType) => {
  notification["error"]({
    message: data.message,
    description: data.description,
  });
};

const handleError = (data: { message: string }) => {
  notification["error"]({
    message: "系统异常",
    description: data.message,
  });
};

const instance = axios.create({
  baseURL: axiosConfig.baseURL as string,
  timeout: axiosConfig.timeout,
  headers: {
    "Content-Type": axiosConfig.contentType,
  },
});

const download = (disposition: any, data: any) => {
  const blob = new Blob([data]);
  const start = "filename*=utf-8''";
  let fileName = "";
  if (disposition.includes(start)) {
    fileName = disposition.substr(disposition.indexOf(start) + start.length);
    fileName = decodeURI(fileName);
  }
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const elink = document.createElement("a");
    elink.download = fileName;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
};

instance.interceptors.request.use(
  (config) => {
    store.dispatch("loading/addLoadingAction");
    const token = localStorage.getItem("local." + axiosConfig.tokenName);
    if (token) config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    store.dispatch("loading/subLoadingAction");
    const { code } = response.data;
    if (response.headers["content-disposition"]) {
      download(response.headers["content-disposition"], response.data);
      return false;
    }
    if (code === 0) {
      return response.data;
    } else if (code === 10000) {
      handleCode(response.data);
      if (location.pathname != "/login") {
        // router.push("/login");
        location.href = "/login";
      }
      return Promise.reject(response.data);
    } else {
      handleCode(response.data);
      return Promise.reject(response.data);
    }
  },
  (error) => {
    store.dispatch("loading/subLoadingAction");
    const { response } = error;
    if (error.response && error.response.data) {
      handleCode(response.data);
      return Promise.reject(error);
    } else {
      let { message } = error;
      if (message === "Network Error") {
        message = "后端接口连接异常";
        handleError({ message: message });
      }
      if (message.includes("timeout")) {
        message = "后端接口请求超时";
        handleError({ message: message });
      }
      if (message.includes("Request failed with status code")) {
        message = "后端接口异常:" + message;
        handleError({ message: message });
      }
      message.error(message || `后端接口未知异常`);
      return Promise.reject(error);
    }
  }
);

export const requests = (options: AxiosRequestConfig) => {
  return instance({ method: "post", ...options });
};

// export default instance;

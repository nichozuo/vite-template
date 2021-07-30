console.log("baseUrl", import.meta.env);
export const axiosConfig = {
  tokenName: "AdminToken",
  baseURL: import.meta.env["VITE_BASE_URL"],
  //配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  timeout: 200000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
};

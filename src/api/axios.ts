import axios from "axios";

interface IRequestError extends Error {
  msg: string;
}
const instance = axios.create({
  // baseURL: baseUrl,
  timeout: 60000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// request 请求 拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应 response拦截器  如果非200 。拦截器的两个回调都会走
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // http请求状态码只认200
      const res = response.data; //  拿到后端返回的数据
      // 给message赋值
      res.message = res.message || res.msg;
      // 实际业务状态码只认 '00000'.
      if (res.code === "00000") {
        // 大部分请求只有正确的返回值。那就是code 00000
        return Promise.resolve(res.data);
      } else {
        // 不同的状态码并不是常态，其余状态码统一扔try catch处理,这里需要在业务代码中判断状态码
        return Promise.reject(res);
      }
    } else if ([302, 301].includes(response.status)) {
      return Promise.resolve(response.data);
    } else {
      // 非200状态码,但是不包括500，500走的error回调
      const mockError = new Error() as IRequestError;
      mockError.msg = "服务异常";
      return Promise.reject(mockError);
    }
  },
  (error) => {
    console.log("请求报错,原生error", error);
    //  返回一个mock的数据错误,可以统一用toast提示
    const mockError = new Error() as IRequestError;
    // 判断网络环境
    if (error.message.includes("Network Error")) {
      mockError.msg = "Network Error：网络环境异常!";
    } else if (error.message.includes("timeout")) {
      mockError.msg = "timeout：请求超时，请稍后再试！";
    } else if (error.message.includes("取消请求")) {
      mockError.msg = "取消请求";
      return Promise.reject(mockError);
    } else if (error.response) {
      if (error.response.status === 404) {
        // 400 开头。 统一 找不到服务
        mockError.msg = "404：找不到了，请联系管理员！";
      } else if (String(error.response.status).startsWith("5")) {
        // 500开头。统一服务器忙
        mockError.msg = error.response.status + "：服务器忙，请稍后再试！";
      }
    } else {
      mockError.msg = "网络异常!";
    }
    mockError.message = mockError.msg;
    return Promise.reject(mockError);
  }
);

export { instance };

import { instance as axios } from "./axios";
// data,params
export function getUser(data: any) {
  return axios.request({
    url: "",
    method: "get",
    data,
  });
}

import { instance as axios } from "../axios";
import { IOrder } from "./order.interface";
// data,params
export function getUser(data: IOrder) {
  return axios.request({
    url: "",
    method: "get",
    data,
  });
}

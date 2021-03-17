import request from "@/utils/request";

export function getToken() {
  return request({
    url: "/qiniu/config",
    method: "get"
  });
}

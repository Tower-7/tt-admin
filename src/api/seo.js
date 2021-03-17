import request from "@/utils/request";

export function fetchSeo(id) {
  return request({
    url: "/seo/detail",
    method: "get",
    params: { id }
  });
}

export function updateSeo(data) {
  return request({
    url: "/seo/update",
    method: "post",
    data
  });
}

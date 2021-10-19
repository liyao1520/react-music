import request from "@/utils/request";
export const getSearch = (params) =>
  request({
    url: "/search",
    params,
  });
export const getSearchHot= () =>
  request({
    url: "/search/hot",
  });

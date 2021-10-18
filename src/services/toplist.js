import request from "@/utils/request";
//排行榜
export const getTopList = () =>
  request({
    url: "/toplist",
  });

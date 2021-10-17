import request from "@/utils/request";
export const getSongDetail = (ids) =>
  request({
    url: "/song/detail",
    params: {
      ids,
    },
  });

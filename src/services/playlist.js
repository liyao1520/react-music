import request from "@/utils/request";

export const getPlayListDetail = (id) =>
  request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });

export const getPlayListSongs = (ids) =>
  request({
    url: "/song/detail",
    params: {
      ids: ids.join(","),
    },
  });

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
export const getPlayList = (params) =>
  request({
    url: "/top/playlist",
    params: params,
  });
//歌单分类
export const getPlayListCatlist = () =>
  request({
    url: "/playlist/catlist",
  });
export const getRelatedPlayList = (id) =>
  request({
    url: "/related/playlist",
    params: { id },
  });
export const getSimiPlayList = (id) =>
  request({
    url: "/simi/playlist",
    params: { id },
  });

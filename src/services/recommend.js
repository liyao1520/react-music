import request from "@/utils/request";

export const getTopBanners = () =>
  request({
    url: "/banner",
  });

export const getHotRecommends = (limit = 8) =>
  request({
    url: "/personalized",
    params: {
      limit,
    },
  });
export const getNewAlbum = (limit) =>
  request({
    url: "/top/album",
    params: {
      limit,
    },
  });
export const getToplist = (idx) =>
  request({
    url: "/top/list",
    params: {
      idx,
    },
  });

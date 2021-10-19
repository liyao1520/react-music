import request from "@/utils/request";
export const getArtistList = (params) =>
  request({
    url: "/artist/list",
    params,
  });
//歌手热门50首歌曲
export const getArtistTopSong = (id) =>
  request({
    url: "/artist/top/song",
    params: {
      id,
    },
  });

//获取歌手详情
export const getArtistDetail = (id) =>
  request({
    url: "/artists",
    params: {
      id,
    },
  });

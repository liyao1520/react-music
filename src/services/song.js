import request from "../utils/request";

export const getLyric = (id) =>
  request({
    url: "/lyric",
    params: {
      id,
    },
  });

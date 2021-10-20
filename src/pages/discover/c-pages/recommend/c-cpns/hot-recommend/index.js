import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import RecommendHeader from "@/components/recommend-header";
import SongsCover from "@/components/songs-cover";

import { getHotRecommendsAction } from "../../store/actionCreators";

import { HotRecommentWrapper } from "./style";
export default memo(function HotRecomment() {
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.get("recommend").get("hotRecommends"),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getHotRecommendsAction());
  }, [dispatch]);
  const keywords = [
    {
      name: "华语",
      link: "/discover/playlist?cat=华语",
    },
    {
      name: "流行",
      link: "/discover/playlist?cat=流行",
    },
    {
      name: "摇滚",
      link: "/discover/playlist?cat=摇滚",
    },
    {
      name: "民谣",
      link: "/discover/playlist?cat=民谣",
    },
    {
      name: "电子",
      link: "/discover/playlist?cat=电子",
    },
  ];
  return (
    <HotRecommentWrapper>
      <RecommendHeader title="热门推荐" keywords={keywords} moreLink="/discover/playlist"></RecommendHeader>
      <div className="hot-list">
        {hotRecommends.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <SongsCover info={item} className="item" playListId={item.id}></SongsCover>
            </div>
          );
        })}
      </div>
    </HotRecommentWrapper>
  );
});

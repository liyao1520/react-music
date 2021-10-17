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
  return (
    <HotRecommentWrapper>
      <RecommendHeader title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}></RecommendHeader>
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

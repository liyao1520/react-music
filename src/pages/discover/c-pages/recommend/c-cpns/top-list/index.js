import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopListAction } from "../../store/actionCreators";

import RecommendHeader from "@/components/recommend-header";
import TopRanking from "@/components/top-ranking";
import { TopListWrapper } from "./style";
export default memo(function TopList() {
  const dispatch = useDispatch();
  const { upRanking, originRanking, newRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <TopListWrapper>
      <RecommendHeader title="榜单" />
      <div className="top-list-wrap recommend_top_bg">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </TopListWrapper>
  );
});

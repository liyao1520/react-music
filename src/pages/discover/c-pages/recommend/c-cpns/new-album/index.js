import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import RecommendHeader from "@/components/recommend-header";
import AlbumCover from "@/components/album-cover";
import { NewAlbumWrapper } from "./style";

import { getNewAlbumsActions } from "../../store/actionCreators";
import { Carousel } from "antd";

export default memo(function PersonalizedRecommned(props) {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));

  useEffect(() => {
    dispatch(getNewAlbumsActions(10));
  }, [dispatch]);

  const carouselRef = useRef();
  return (
    <NewAlbumWrapper>
      <RecommendHeader title="新碟上架" hideMore />
      <div className="album-carousel-wrap">
        <div className="icon-prev sprite_02" onClick={(e) => carouselRef.current.prev()}></div>
        <div className="icon-next sprite_02" onClick={(e) => carouselRef.current.next()}></div>
        <Carousel className="carousel" ref={carouselRef}>
          {[0, 1].map((i) => {
            return (
              <div key={i} className="page">
                {newAlbums.slice(i * 5, (i + 1) * 5).map((item) => {
                  return (
                    <AlbumCover info={item} key={item.id}>
                      {item.name}
                    </AlbumCover>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    </NewAlbumWrapper>
  );
});

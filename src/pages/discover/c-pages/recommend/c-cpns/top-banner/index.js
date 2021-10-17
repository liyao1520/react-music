import { Carousel } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { getTopBannerAction } from "../../store/actionCreators";
import { TopBannerWrapper } from "./style";
import { connect } from "react-redux";
function TopBanner(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);

  //轮播ref
  const bannerRef = useRef();

  const bannerChange = useCallback((form, to) => {
    setCurrentIndex(to);
  }, []);

  //其他业务逻辑

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="wrap-v2">
        <Carousel
          effect="fade"
          autoplay
          dotPosition="bottom"
          className="carousel"
          ref={bannerRef}
          autoplaySpeed={5000}
          beforeChange={bannerChange}
          speed={900}
        >
          {topBanners.map((item) => {
            return (
              <div key={item.targetId}>
                <a href={item.url}>
                  <img src={item.imageUrl} alt="" />
                </a>
              </div>
            );
          })}
        </Carousel>
        <div className="download"></div>
        <div className="btn-left banner_sprite" onClick={(e) => bannerRef.current.prev()}></div>
        <div className="btn-right banner_sprite" onClick={(e) => bannerRef.current.next()}></div>
      </div>
    </TopBannerWrapper>
  );
}
const mapStateToProps = (state) => ({
  topBanners: state.getIn(["recommend", "topBanners"]),
});
const mapDispatchToProps = (dispatch) => ({
  getBanners() {
    dispatch(getTopBannerAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(TopBanner));

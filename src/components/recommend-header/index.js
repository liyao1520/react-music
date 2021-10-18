import React, { memo } from "react";
import { RecommendHeaderWrapper } from "./style";
import propTypes from "prop-types";
const Header = memo(function Header(props) {
  const { title, keywords, titlePath, hideMore } = props;

  return (
    <RecommendHeaderWrapper>
      <div className="header-left">
        <h3 className="title sprite_02">
          <a href={titlePath}>{title}</a>
        </h3>
        {keywords.map((item, index) => {
          return (
            <div className="item" key={item}>
              <a>{item}</a>
              {index !== keywords.length - 1 && <span className="divider">|</span>}
            </div>
          );
        })}
      </div>
      {!hideMore && (
        <div className="header-right">
          <a>更多</a>
          <i className="sprite_02"></i>
        </div>
      )}
    </RecommendHeaderWrapper>
  );
});
Header.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  titlePath: propTypes.string,
  hideMore: propTypes.bool,
};
Header.defaultProps = {
  keywords: [],
  hideMore: false,
};
export default Header;

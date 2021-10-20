import React, { memo } from "react";
import { RecommendHeaderWrapper } from "./style";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Header = memo(function Header(props) {
  const { title, keywords, titlePath, hideMore, moreLink = "/" } = props;
  return (
    <RecommendHeaderWrapper>
      <div className="header-left">
        <h3 className="title sprite_02">
          <a href={titlePath}>{title}</a>
        </h3>
        {keywords.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <NavLink to={item.link}>{item.name}</NavLink>
              {index !== keywords.length - 1 && <span className="divider">|</span>}
            </div>
          );
        })}
      </div>
      {!hideMore && (
        <div className="header-right">
          <NavLink to={moreLink}>更多</NavLink>
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

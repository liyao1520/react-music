import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./style";
import { navLink } from "@/common/local-data";
import { useHistory } from "react-router-dom";
import { Input, Popover, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getSearchHot } from "@/services/search";

export default memo(function MyFooter() {
  const history = useHistory();
  const [searchHots, setSearchHots] = useState([]);
  function onPressEnter(e) {
    const keywords = e.target.value;
    history.push("/search?keywords=" + keywords);
  }
  useEffect(() => {
    getSearchHot().then((res) => {
      setSearchHots(res.result.hots);
    });
  }, []);
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="header-left">
          <NavLink to="/" className="sprite_01 logo">
            网易云音乐
          </NavLink>
          {navLink.map((item, index) => {
            return (
              <div key={item.title} className="nav-link">
                {item.path.includes("http") ? (
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <NavLink to={item.path} activeClassName="nav-link-active">
                    <span>{item.title}</span>
                    <sub className="sprite_01"></sub>
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
        <div className="header-right">
          <Popover
            content={
              <div style={{ display: "flex", flexWrap: "wrap", width: "300px" }}>
                {searchHots.map((item) => {
                  return (
                    <Tag
                      style={{ margin: "5px", cursor: "pointer" }}
                      onClick={(e) => history.push("/search?keywords=" + item.first)}
                      key={item.first}
                    >
                      {item.first}
                    </Tag>
                  );
                })}
              </div>
            }
          >
            <Input
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
              onPressEnter={onPressEnter}
              className="search"
            />
          </Popover>
          <button className="button border">创作者中心</button>
          <button className="button">登录</button>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

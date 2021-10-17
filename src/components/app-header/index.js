import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./style";
import { navLink } from "@/common/local-data";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default memo(function MyFooter() {
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
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search" />
          <button className="button border">创作者中心</button>
          <button className="button">登录</button>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

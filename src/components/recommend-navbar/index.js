import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { discoverMenu } from "@/common/local-data";
import { DiscoverWrapper } from "@/pages/discover/style";
export default memo(function NavBar() {
  return (
    <DiscoverWrapper>
      <div className="wrap-v1">
        <ul className="nav-link">
          {discoverMenu.map((item) => {
            return (
              <li key={item.title}>
                <NavLink to={item.path} exact>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </DiscoverWrapper>
  );
});

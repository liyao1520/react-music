import React, { memo } from "react";
import { DiscoverWrapper } from "./style";
import { discoverMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function Discover(props) {
  const routes = props.route.routes;
  return (
    <div>
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
      {renderRoutes(routes)}
    </div>
  );
});

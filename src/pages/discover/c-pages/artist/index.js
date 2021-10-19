import React, { memo, useCallback, useEffect, useState } from "react";
import { artistArea, artistType } from "@/common/local-data";
import { ArtistWrapper } from "./style";
import { useHistory, useLocation } from "react-router";
import { getArtistList } from "@/services/article";
import ArtistCover from "@/components/artist-cover";
import { Divider } from "antd";
export default memo(function Article() {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const areaId = search.get("area") ? search.get("area") : "-1";
  const typeId = search.get("type") ? search.get("type") : "1";
  const [artistList, setArtistList] = useState([]);
  const currentArea = artistArea.find((item) => item.value === areaId);
  const currentType = artistType.find((item) => item.value === typeId);
  let titleStr = null;
  if (currentArea && currentType) {
    titleStr = currentArea.name + currentType.name;
  }
  useEffect(() => {
    getArtistList({
      area: areaId,
      type: typeId,
      limit: 100,
    }).then((res) => {
      setArtistList(res.artists);
    });
  }, [areaId, typeId]);
  const artistTypeClick = useCallback(
    (area, type) => {
      console.log(area, type);
      history.replace(`/discover/artist?area=${area}&type=${type}`);
    },
    [history]
  );
  const artistClick = useCallback(
    (id) => {
      history.push("/artist?id=" + id);
    },
    [history]
  );
  return (
    <ArtistWrapper>
      <div className="left">
        <div>
          {artistArea.map((item) => {
            return (
              <div className="wrap" key={item.value}>
                <h3 className="title">{item.name}</h3>
                <ul className="artist-list">
                  {artistType.map((type) => {
                    return (
                      <li
                        className="artist-item"
                        onClick={(e) => {
                          artistTypeClick(item.value, type.value);
                        }}
                        key={type.value}
                      >
                        <a className={areaId === item.value && typeId === type.value ? "active" : ""}>
                          {item.name + type.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="title">{titleStr}</div>
        <div className="artist-list">
          {artistList.slice(0, 10).map((item) => {
            return (
              <div className="item" onClick={(e) => artistClick(item.id)} key={item.id}>
                <ArtistCover info={item} />
              </div>
            );
          })}
        </div>
        <Divider style={{ margin: "10px" }} />
        <div className="artist-list">
          {artistList.slice(10).map((item) => {
            return (
              <div className="item" onClick={(e) => artistClick(item.id)} key={item.id}>
                <a>{item.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </ArtistWrapper>
  );
});

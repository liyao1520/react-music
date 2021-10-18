import { getPlayList, getPlayListCatlist } from "@/services/playlist";
import { Button, Col, Pagination, Popover, Row } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlayListWrapper } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import SongsCover from "@/components/songs-cover";
export default memo(function Playlist(props) {
  const LIMIT = 35;
  const search = new URLSearchParams(props.location.search);
  const cat = search.get("cat");
  const offset = search.get("offset");
  const [playlists, setPlaylists] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();
  const ref = useRef();
  useEffect(() => {
    getPlayList({ cat, offset, limit: LIMIT }).then((res) => {
      setPlaylists(res.playlists);
      setTotal(res.total);
    });
  }, [cat, offset]);
  const [category, setCategory] = useState({});
  useEffect(() => {
    getPlayListCatlist().then((res) => {
      const categories = res.categories;
      const category = {};
      for (let k in categories) {
        const v = categories[k];
        category[v] = [];
      }
      res.sub.forEach((item) => {
        category[categories[item.category]].push(item.name);
      });
      setCategory(category);
    });
  }, []);
  const cateforyClick = useCallback(
    (category) => {
      history.replace("/discover/playlist?cat=" + category);
    },
    [history]
  );
  const handlePaginationChange = useCallback(
    (val) => {
      if (cat) {
        history.replace("/discover/playlist?cat=" + cat + "&offset=" + (val - 1) * LIMIT);
      } else {
        history.replace("/discover/playlist?offset=" + (val - 1) * LIMIT);
      }
    },
    [history, cat]
  );
  return (
    <PlayListWrapper>
      <div className="header">
        <div className="cat-name">全部</div>
        <Popover
          ref={ref}
          trigger="click"
          placement="bottom"
          content={
            <div style={{ width: "640px" }}>
              <Row gutter={[16, 24]}>
                <Col offset={1}>
                  <Button size="mini">全部风格</Button>
                </Col>
              </Row>
              {Object.keys(category).map((item) => {
                return (
                  <Row gutter={[16, 24]} key={item} style={{ marginTop: "10px" }}>
                    <Col
                      span={4}
                      style={{
                        fontWeight: "700",
                        borderRight: "1px solid #e6e6e6",
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </Col>
                    <Col span={20}>
                      {category[item].map((item) => {
                        return (
                          <a
                            onClick={(e) => {
                              cateforyClick(encodeURI(item));
                            }}
                            style={{ margin: "4px 6px", display: "inline-block" }}
                            key={item}
                          >
                            {item}
                          </a>
                        );
                      })}
                    </Col>
                  </Row>
                );
              })}
            </div>
          }
        >
          <div className="cat-list">
            <Button size="middle">
              选择分类
              <DownOutlined />
            </Button>
          </div>
        </Popover>
      </div>
      <div className="playlists">
        {playlists.map((item) => {
          return (
            <div className="item" key={item.id}>
              <SongsCover info={item} />
            </div>
          );
        })}
      </div>
      <Pagination
        showQuickJumper
        showSizeChanger={false}
        defaultCurrent={1}
        total={total}
        pageSize={LIMIT}
        onChange={handlePaginationChange}
        current={offset ? offset / LIMIT + 1 : 1}
      />
    </PlayListWrapper>
  );
});

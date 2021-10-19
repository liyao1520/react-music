import ArtistCover from "@/components/artist-cover";
import PlayList from "@/components/play-list";
import { getSearch } from "@/services/search";
import { Input, Row, Tabs } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { SearchWrapper } from "./style";
export default memo(function Search() {
  const location = useLocation();
  const history = useHistory();
  const search = new URLSearchParams(location.search);
  const keywords = search.get("keywords") || "周杰伦";
  const type = search.get("type") || "1";
  const [inputValue, setInputValue] = useState(keywords);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    setInputValue(keywords);
  }, [keywords]);
  useEffect(() => {
    getSearch({ keywords, type }).then((res) => {
      const { songs = [], artists = [] } = res.result;
      setSongs(songs);
      setArtists(artists);
    });
  }, [keywords, type]);

  function onSearch(keywords) {
    history.replace("/search?keywords=" + keywords + "&type=" + type);
  }
  return (
    <SearchWrapper>
      <Row justify="center">
        <Input.Search
          size="large"
          style={{ width: "400px" }}
          onSearch={onSearch}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </Row>
      <Tabs
        activeKey={type}
        onChange={(type) => {
          history.replace("/search?keywords=" + keywords + "&type=" + type);
        }}
      >
        <Tabs.TabPane key="1" tab="歌曲">
          <PlayList songs={songs} />
        </Tabs.TabPane>
        <Tabs.TabPane key="100" tab="歌手">
          <div className="artists-list">
            {artists.map((item) => {
              return (
                <div
                  key={item.id}
                  className="artists-item"
                  onClick={(e) => {
                    history.push("/artist?id=" + item.id);
                  }}
                >
                  <ArtistCover info={item} />
                </div>
              );
            })}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </SearchWrapper>
  );
});

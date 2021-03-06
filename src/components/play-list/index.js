import React, { memo } from "react";
import { Table, Tooltip } from "antd";
import styles from "./index.module.css";
import { formatDate } from "@/utils/format-data";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCurrentSongAction } from "@/pages/player/store/actionCreators";
import { NavLink } from "react-router-dom";
export default memo(function PlayList(props) {
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  function playMusic(id) {
    dispatch(getCurrentSongAction(id));
  }
  const dataSource = props.songs;
  const columns = [
    {
      title: "",

      key: "id",
      render(row, record, index) {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ display: "inline-block", width: "24px" }}>{index + 1}</span>
            <i
              className={["iconfont", styles["play-icon"]].join(" ")}
              style={{
                color: currentSong.id === row.id && "#d31111",
              }}
              onClick={(e) => {
                playMusic(row.id);
              }}
            >
              &#xe606;
            </i>
          </div>
        );
      },
    },
    {
      title: "歌曲标题",
      dataIndex: "name",
      key: "name",
      render(name, row) {
        return <NavLink to={"/song?id=" + row.id}>{name}</NavLink>;
      },
    },
    {
      title: "时长",
      key: "dt",
      render(row) {
        return row.dt ? formatDate(row.dt, "mm:ss") : formatDate(row.duration, "mm:ss");
      },
    },
    {
      title: "歌手",
      key: "ar",
      render(row, index) {
        return row.ar ? (
          <NavLink to={"/artist?id=" + row.ar[0].id} key={index}>
            {row.ar[0].name}
          </NavLink>
        ) : (
          <NavLink to={"/artist?id=" + row.artists[0].id} key={index}>
            {row.artists[0].name}
          </NavLink>
        );
      },
    },
    {
      title: "专辑",
      dataIndex: ["al", "name"],
      onCell: () => {
        return {
          style: {
            maxWidth: 150,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            cursor: "pointer",
          },
        };
      },
      render(text) {
        return (
          <Tooltip placement="topLeft" title={text}>
            {text}
          </Tooltip>
        );
      },
    },
  ];
  return (
    <>
      <div className={styles.title}>
        歌曲列表
        <span className={styles.count}>{props.songs && props.songs.length} 首歌</span>
      </div>
      <div className={styles.border}>
        <Table
          rowKey="id"
          dataSource={dataSource}
          rowClassName={styles["row-class"]}
          size="small"
          stripe
          columns={columns}
          pagination={false}
        ></Table>
      </div>
    </>
  );
});

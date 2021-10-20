import React from "react";

import { Redirect } from "react-router";
import search from "@/pages/search";
const discover = React.lazy((_) => import("@/pages/discover"));
const album = React.lazy((_) => import("@/pages/discover/c-pages/album"));
const artist = React.lazy((_) => import("@/pages/discover/c-pages/artist"));
const djradio = React.lazy((_) => import("@/pages/discover/c-pages/djradio"));
const playlist = React.lazy((_) => import("@/pages/discover/c-pages/playlist"));
const recommend = React.lazy((_) => import("@/pages/discover/c-pages/recommend"));
const toplist = React.lazy((_) => import("@/pages/discover/c-pages/toplist"));
const friend = React.lazy((_) => import("@/pages/friend"));
const my = React.lazy((_) => import("@/pages/my"));
const playList = React.lazy((_) => import("@/pages/play-list"));
const song = React.lazy((_) => import("@/pages/song"));
const artistpage = React.lazy((_) => import("@/pages/artist"));
const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover" />;
    },
    component: discover,
  },
  {
    path: "/discover",
    component: discover,
    routes: [
      {
        path: "/discover",
        component: recommend,
        exact: true,
      },
      {
        path: "/discover/playlist",
        component: playlist,
      },
      {
        path: "/discover/toplist",
        component: toplist,
      },
      {
        path: "/discover/djradio",
        component: djradio,
      },
      {
        path: "/discover/artist",
        component: artist,
      },
      {
        path: "/discover/album",
        component: album,
      },
    ],
  },
  {
    path: "/friend",
    component: friend,
  },
  {
    path: "/my",
    component: my,
  },
  {
    path: "/song",
    component: song,
  },
  {
    path: "/playlist",
    component: playList,
  },
  {
    path: "/artist",
    component: artistpage,
  },
  {
    path: "/search",
    component: search,
  },
];

export default routes;

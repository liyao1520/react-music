import discover from "@/pages/discover";
import album from "@/pages/discover/c-pages/album";
import artist from "@/pages/discover/c-pages/artist";
import djradio from "@/pages/discover/c-pages/djradio";
import playlist from "@/pages/discover/c-pages/playlist";
import recommend from "@/pages/discover/c-pages/recommend";
import toplist from "@/pages/discover/c-pages/toplist";
import friend from "@/pages/friend";
import my from "@/pages/my";
import playList from "@/pages/play-list";
import song from "@/pages/song";
import { Redirect } from "react-router";

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
];

export default routes;

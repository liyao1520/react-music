import React, { memo, Suspense } from "react";

import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "@/store";
import routes from "./router";

import { LoadingOutlined } from "@ant-design/icons";
import Header from "@/components/app-header";
import Footer from "@/components/app-footer";
import AppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div style={{ height: "100vh", overflowY: "auto" }}>
          <Header />
          <Suspense fallback={<LoadingOutlined />}> {renderRoutes(routes)}</Suspense>
          <Footer />
          <AppPlayerBar />
        </div>
      </HashRouter>
    </Provider>
  );
});

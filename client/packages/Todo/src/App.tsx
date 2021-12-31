import * as React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Chat from "./app/pages/chat.page";
import Dashboard from "./app/pages/dashboard.page";
import Home from "./app/pages/home.page";
import { isDev } from "./util/isDev";

const App: React.FC<{ parentNavigation: any }> = ({ parentNavigation }) => (
  <div
    style={{
      backgroundColor: "purple",
      color: "white",
      height: "100vh",
      width: "100vw",
    }}
  >
    <React.Suspense fallback={"Loading"}>
      <Routes>
        <Route
          path="dashboard"
          element={<Dashboard parentNavigation={parentNavigation} />}
        />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </React.Suspense>
  </div>
);

export default App;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "twin.macro";

import App from "./App";

const useMount = (el: ReactDOM.Container, parentNavigation: any) => {
  console.log(el, !!parentNavigation);
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <App parentNavigation={parentNavigation} />
      </BrowserRouter>
    </React.StrictMode>,
    el
  );
};

// development and in isolation,
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_experience-root");

  if (devRoot) {
    useMount(devRoot, null);
  }
}

// We are running through root app
// and we should export the mount function
export { useMount };

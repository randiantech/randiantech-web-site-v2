import React, { createContext, useState, useEffect } from "react";
import { isMobileWidth } from "./utils";

const AppContext = createContext({
  state: {
    isMobile: isMobileWidth(),
  },
});

const AppContextProvider = ({ children }: any) => {
  let [state, setState] = useState({
    isMobile: isMobileWidth(),
  });

  useEffect(
    () => window.addEventListener("resize", () => setIsMobile(isMobileWidth())),
    []
  );

  const setIsMobile = (isMobile: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isMobile,
    }));
  };

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

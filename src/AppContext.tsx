import React, { createContext, useState, useEffect } from "react";
import { isMobileWidth } from "./utils";

const AppContext = createContext({
  state: {
    isMobile: false,
  },
});
const AppContextProvider = ({ children }: any) => {
  let [state, setState] = useState({
    isMobile: false,
  });

  const handleOnResize = () => {
    setIsMobile(isMobileWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleOnResize());
  }, []);

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

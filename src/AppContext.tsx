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

  const handleOnResize = () => {
    setIsMobile(isMobileWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleOnResize());
    console.log("lala");
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

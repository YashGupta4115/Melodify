import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [shift, setShift] = useState(0);
  // const [sidebarWidth, setSideBarWidth] = useState(null);
  const [mainWidth, setMainWidth] = useState(null);

  return (
    <Context.Provider value={{ shift, setShift, mainWidth, setMainWidth }}>
      {children}
    </Context.Provider>
  );
};

export const useContextCon = () => useContext(Context);

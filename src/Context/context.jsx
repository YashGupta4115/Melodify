import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [shift, setShift] = useState(0);

  return (
    <Context.Provider value={{ shift, setShift }}>{children}</Context.Provider>
  );
};

export const useContextCon = () => useContext(Context);

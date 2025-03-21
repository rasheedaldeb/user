import { useState, createContext } from "react";

const StatesContext = createContext();

const ContextProvider = ({ children }) => {
  const [postsType, setPostsType] = useState("all");
  return (
    <StatesContext.Provider value={{ postsType, setPostsType }}>
      {children}
    </StatesContext.Provider>
  );
};
export { StatesContext, ContextProvider };

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";

interface HistoryContextTypes {
  history: any;
  setHistory: any;
  getHistoryLocal: any;
  getCurrentHistory: () => any;
  saveHistory: any;
}
const HistoryContext = createContext<Partial<HistoryContextTypes>>({
  history: [],
});

const HistoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [history, setHistory] = useState<any>([]);

  // get all history
  const getHistoryLocal = (): any[] => {
    const data = JSON.parse(localStorage.getItem("histories") || "[]");
    return data;
  };

  // get current history
  const getCurrentHistory = (): any => {
    const json: string = localStorage.getItem("history") || "null";
    const data = JSON.parse(json);
    return data;
  };

  const saveHistory = (data: any): void => {
    localStorage.setItem("histories", JSON.stringify(data));
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        saveHistory,
        getHistoryLocal,
        getCurrentHistory,
      }}>
      {children}
    </HistoryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHistory = () => useContext(HistoryContext);
export default HistoryContextProvider;

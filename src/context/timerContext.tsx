/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";

type TimerContextType = {
  time: number | null;
  setTime?: any;
};

const initialState = {
  time: 0,
};
const TimerContext = createContext<TimerContextType>(initialState);

const TimerContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState<number>(0);
  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;

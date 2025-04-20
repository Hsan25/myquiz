import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import QuestionContextProvider from "./context/questionContext.tsx";
import HistoryContextProvider from "./context/history.tsx";
import queryClient from "./lib/reactQuery.ts";
import TimerContextProvider from "./context/timerContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QuestionContextProvider>
        <HistoryContextProvider>
          <TimerContextProvider>
            <App />
          </TimerContextProvider>
        </HistoryContextProvider>
      </QuestionContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

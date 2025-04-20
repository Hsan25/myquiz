/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState } from "react";

interface QuesctionContextType {
  questions: any;
  setQuestions?: any;
  currentQuestion: any;
  setCurrentQuestion?: any;
  count: number;
  setCount?: any;
  totalCorrect: number;
  setTotalCorrect?: any;
}

const initialState: QuesctionContextType = {
  questions: [],
  count: 0,
  totalCorrect: 0,
  currentQuestion: null,
};
const QuestionContext = createContext<QuesctionContextType>(initialState);

const QuestionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [count, setCount] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);

  return (
    <QuestionContext.Provider
      value={{
        totalCorrect,
        setTotalCorrect,
        count,
        setCount,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
      }}>
      {children}
    </QuestionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestionContext = () => useContext(QuestionContext);
export default QuestionContextProvider;

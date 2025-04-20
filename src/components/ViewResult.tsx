/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHistory } from "../context/history";
import { useQuestionContext } from "../context/questionContext";
import { useNavigate } from "react-router-dom";
import InfoColors from "./InfoColors";
import History from "./History";
import Button from "./Button";
import { useEffect } from "react";
const ViewResult = ({ params }: { params: any }) => {
  const navigate = useNavigate();
  const { history, setHistory, getHistoryLocal } = useHistory();
  const { totalCorrect, setTotalCorrect, questions, setQuestions } = useQuestionContext();

  const saveHistory = () => {
    const localHistory: any = getHistoryLocal();
    localStorage.setItem(
      "histories",
      JSON.stringify([
        ...localHistory,
        {
          date: Date.now(),
          skor: Math.floor((totalCorrect / questions.length) * 100),
          filter: params,
          totalCorrect,
          data: history,
        },
      ])
    );
  };
  const setDefault = () => {
    setTotalCorrect(0);
    setHistory([]);
    setQuestions([]);
  };
  useEffect(() => {
    saveHistory();
  }, []);
  return (
    <>
      <div className="">
        <div className="text-center flex-col flex items-center py-3 justify-center">
          <span className="text-xl">Skor</span>
          <span className="text-green-500 text-6xl">
            {Math.floor((totalCorrect / questions.length) * 100)}
          </span>
        </div>
        <div className="flex flex-col py-7 md:flex-row gap-3 md:justify-center">
          <h1>question amount: {questions.length}</h1>
          <h1>correct : {totalCorrect}</h1>
          <h1>wrong : {questions.length - totalCorrect}</h1>
        </div>
      </div>

      {/* indicator color */}
      <InfoColors />

      {/* result question */}
      <History history={history} />

      <Button
        onClick={() => {
          setDefault();
          navigate("/");
        }}>
        go to home
      </Button>
    </>
  );
};

export default ViewResult;

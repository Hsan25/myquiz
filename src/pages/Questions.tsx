/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useQuestion } from "../features/question";
import { useQuestionContext } from "../context/questionContext";
import { useEffect, useState } from "react";
import ViewResult from "../components/ViewResult";
import ListQuestion from "../components/ListQuestion";
import InfoQuestion from "../components/InfoQuestion";
import Timer from "../components/Timer";
import Loading from "../components/Loading";

const Questions = () => {
  const initTime: number = new Date().getTime();
  const location = useLocation();
  const [isReview, setIsReview] = useState<boolean>(false);
  const [time, setTime] = useState<number>(initTime);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [isTimesUp, setIsTimesUp] = useState<boolean>(false);
  const params = location.state.params;
  const { data, isLoading, isError } = useQuestion(params);
  const { count, setQuestions, questions, currentQuestion, setCurrentQuestion } =
    useQuestionContext();

  const handleFinish = () => {
    setIsFinish(true);
    setIsReview(true);
    setTimeout(() => {
      setIsReview(false);
      setIsTimesUp(false);
    }, 1000);
  };

  const handleTimesUp = () => {
    setIsTimesUp(true);
    handleFinish();
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const start = (): void => {
      setQuestions(data.results);
      setCurrentQuestion(data.results[count]);
      setTime(new Date().getTime() + Math.floor(data.results.length / 2) * 60 * 1000);
    };
    if (data) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (isLoading) return <Loading />;
  if (isError) return <h1>Error...</h1>;

  return (
    <div className="mx-auto max-w-xl p-5 py-10">
      <h1 className="text-center py-3 text-xl">APP QUIZ</h1>
      {!isFinish ? <Timer targetTime={time} fn={handleTimesUp} /> : <></>}
      <InfoQuestion params={params} />
      {!isLoading && currentQuestion && !isFinish ? (
        <>
          <ListQuestion handleFinish={handleFinish} />
        </>
      ) : (
        <>
          {isFinish && isReview ? (
            <>
              {isTimesUp ? <h1>Waktu habis</h1> : null}
              <h1>please wait a moment...</h1>
            </>
          ) : null}
        </>
      )}

      {questions.length == 0 ? (
        <div className="text-center py-4">
          <h1>sorry, no questions available</h1>
          <p>Please come back and choose another option</p>
          <Link to={"/"} className="hover:underline text-blue-600">
            go to home
          </Link>
        </div>
      ) : (
        <></>
      )}

      {!isReview && isFinish && questions.length ? <ViewResult params={params} /> : <></>}
    </div>
  );
};

export default Questions;

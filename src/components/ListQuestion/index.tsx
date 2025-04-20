/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHistory } from "../../context/history";
import { useQuestionContext } from "../../context/questionContext";
import he from "he";
const ListQuestion = ({ handleFinish }: { handleFinish: () => void }) => {
  const { history, setHistory } = useHistory();
  const {
    currentQuestion,
    count,
    setCount,
    questions,
    setTotalCorrect,
    totalCorrect,
    setCurrentQuestion,
  } = useQuestionContext();

  const random = (arr: any) => {
    let length = arr.length;
    const result: any = [];
    let idx: number;
    while (length > 0) {
      idx = Math.floor(Math.random() * length);
      result.push(arr[idx]);
      arr.splice(idx, 1);
      length--;
    }
    currentQuestion.answers = result;
    return result;
  };

  // meyimpan jejak sekarang

  const handleClick = (answer: string) => {
    const isCorrect = currentQuestion.correct_answer == answer;
    // save to history
    setHistory([...history, { ...currentQuestion, user_answer: answer, isCorrect }]);

    if (isCorrect) setTotalCorrect(totalCorrect + 1);
    setCount(count + 1);

    setCurrentQuestion(questions[count + 1]);
    if (count === questions.length - 1) {
      setCount(0);
      handleFinish();
    }
  };

  return (
    <>
      <div className="py-5 text-xl">no {`${count + 1}/${questions.length}`}</div>
      {[currentQuestion].map((q: any, idx: number) => {
        return (
          <div key={idx}>
            <h1>{he.decode(q.question)}</h1>
            <div className="flex flex-col gap-4 py-6 cursor-pointer">
              {random([...q.incorrect_answers, q.correct_answer]).map(
                (answer: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => handleClick(answer)}
                    className="p-2 w-full select-none border-2 border-gray-400 hover:bg-slate-300/40 rounded">
                    {he.decode(answer)}
                  </div>
                )
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListQuestion;

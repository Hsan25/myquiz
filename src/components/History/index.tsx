/* eslint-disable @typescript-eslint/no-explicit-any */
import he from "he";
import React from "react";

const History = ({ history }: { history: any }):React.JSX.Element => {
  const options = {
    correct: "bg-green-600 ",
    wrong: "bg-red-600  ",
    default: "border-2 border-gray-400",
  };
  return (
    <>
      {history.map((h: any, idx: number) => {
        return [h].map((q: any) => {
          return (
            <div key={idx}>
              <div>
                {idx + 1}. {he.decode(q.question)}
              </div>
              <div className="flex flex-col gap-4 py-6 ">
                {q.answers.map((answer: string, idx: number) => (
                  <div
                    key={idx}
                    className={`${
                      q.isCorrect && answer == q.user_answer
                        ? options.correct
                        : !q.isCorrect && answer == q.user_answer
                        ? options.wrong
                        : answer == q.correct_answer
                        ? options.correct
                        : options.default
                    } p-2 w-full select-none relative rounded`}>
                    <div
                      className={`
                      ${
                        answer == q.user_answer &&
                        "absolute p-1.5 rounded-full top-1/2 -translate-y-1/2 right-2 bg-blue-900"
                      } `}></div>
                    {he.decode(answer)}
                  </div>
                ))}
              </div>
            </div>
          );
        });
      })}
    </>
  );
};

export default History;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { getCategory } from "../../utils/getCategory";

const ListHistory = ({ histories }: { histories: any }): React.JSX.Element => {
  return (
    <>
      <div className=" flex flex-col gap-3 py-5">
        {histories.map((h: any, idx: number) => {
          return (
            <Link
              to={`/history/${h.date}`}
              key={idx}
              className="p-2 flex hover:bg-slate-600/40 cursor-pointer items-center md:flex-row flex-col justify-between  border-2 rounded border-slate-400">
              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <div className="">Question amount: {h.filter.amount}</div>
                <div className="">Type: {h.filter.type || "random"}</div>
                <div className="">
                  Difficulty: {h.filter.difficulty || "random"}
                </div>
                <div className="">
                  Category: {getCategory(h.filter.category) || "random"}
                </div>
                <div className="">Skor: {h.skor}</div>
              </div>
              <div className="py-2">
                {new Date(h.date).toLocaleDateString()}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ListHistory;

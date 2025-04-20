/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useHistory } from "../context/history";
// import { useEffect } from "react";
import Button from "../components/Button";
import ListHistory from "../components/History/ListHistory";
import { useState } from "react";

const HistoryPage = () => {
  const { getHistoryLocal } = useHistory();
  const h = getHistoryLocal();
  const [histories, setHistories] = useState(h);
  const clearHistory = () => {
    localStorage.setItem("histories", "[]");
    setHistories([]);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 p-4">
      {histories.length ? (
        <>
          <Button onClick={clearHistory}>Clear History</Button>
          <ListHistory histories={histories} />
        </>
      ) : (
        <h1 className="py-5 text-center">You don't have a history.</h1>
      )}

      <Link to={"/"} className="p-2 bg-violet-700  hover:bg-violet-600 rounded  ">
        go to home
      </Link>
    </div>
  );
};

export default HistoryPage;

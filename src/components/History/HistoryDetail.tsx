/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useHistory } from "../../context/history";
import InfoColors from "../InfoColors";
import InfoQuestion from "../InfoQuestion";
import History from ".";
import Button from "../Button";
const HistoryDetail = () => {
  const { getHistoryLocal } = useHistory();
  const { id } = useParams();
  const history = getHistoryLocal().find((h: any) => h.date == id);
  console.log(id);
  console.log(history);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      {history ? (
        <div className="max-w-xl mx-auto p-5 py-10">
          <InfoQuestion params={history.filter} />
          <div className="">
            <div className="text-center flex-col flex items-center py-3 justify-center">
              <span className="text-xl">Skor</span>
              <span className="text-green-500 text-6xl">{history.skor}</span>
            </div>
            <div className="flex flex-col py-7 md:flex-row gap-3 md:justify-center">
              <h1>question amount: {history.data.length}</h1>
              <h1>total correct : {history.totalCorrect}</h1>
              <h1>total wrong : {history.data.length - history.totalCorrect}</h1>
            </div>
          </div>

          {/* indicator color */}
          <InfoColors />

          {/* result question */}
          <History history={history.data} />

          <div className="flex justify-between">
            <Button onClick={handleClick}>Back</Button>
            <Link to={"/"}>
              <Button>Go to Home</Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-xl text-center">History not found</h1>
        </>
      )}
    </>
  );
};

export default HistoryDetail;

import { getCategory } from "../../utils/getCategory";

type Params = {
  difficulty: string | null;
  category: number;
  type: string | null;
};
const InfoQuestion = ({ params }: { params: Params }) => {
  return (
    <>
      <div className=" flex flex-col md:flex-row md:justify-center py-3 gap-2 md:text-lg">
        <h1>Difficulty: {params.difficulty || "random"}</h1>
        <h1>Category: {getCategory(params.category) || "random"}</h1>
        <h1>Type: {params.type || "random"}</h1>
      </div>
    </>
  );
};

export default InfoQuestion;

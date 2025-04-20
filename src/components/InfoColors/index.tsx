const InfoColors = () => {
  return (
    <div className="py-5 flex flex-col sm:flex-row gap-5">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-green-600 w-3"></div>
        <span>Correct</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-red-600 w-3"></div>
        <span>Wrong</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full  bg-blue-900"></div>
        <span>Your answer</span>
      </div>
    </div>
  );
};

export default InfoColors;

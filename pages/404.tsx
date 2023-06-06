import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
const PageNotFound = () => {
  return (
    <div className="bg-gray-100 h-screen justify-center">
      <center className="">
        <div>
            <SentimentVeryDissatisfiedIcon className="text-gray-500 text-9xl" />
        </div>
        <div className=" tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Oops Something went wrong!
          </span>
        </div>
      </center>
    </div>
  );
};

export default PageNotFound;

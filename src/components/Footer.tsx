import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full  p-3 md:p-5 bg-violet-700 text-white bg-t px-5 md:px-20 flex flex-col md:flex-row gap-5 items-center justify-between">
      <div className="flex gap-1">
        <p>@2024 Develop By</p>
        <Link
          to={"https://hsan25.vercel.app"}
          target="_blank"
          className="hover:underline">
          @Hsan
        </Link>
      </div>
      <div className="">
        <Link to={"https://github.com/Hsan25"} target="_blank">
          <FaGithub size={26} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import RootLayout from "../Layouts/RootLayout";
import { FaLaptop } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <RootLayout>
      <div className="flex h-full max-w-lg mx-auto flex-col justify-center items-center">
        <div className="text-xl md:text-3xl font-medium">
          Hi, I{"'"}m <span className="bg-primary rounded-sm p-1 !text-white">Hasan</span>
        </div>
        <p className="pt-7 text-center text-lg">
          I am a self-taught developer who studied on the internet, I have an interest in technology
          and science.
        </p>
        <div className="pt-5">
          <Link to={"https://hsan25.vercel.app/projects"} target="_blank">
            <button className="flex gap-2 bg-purple-700 p-2 rounded hover:scale-105 items-center">
              <FaLaptop size={20} />
              <span>see my works</span>
            </button>
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}

export default AboutPage;

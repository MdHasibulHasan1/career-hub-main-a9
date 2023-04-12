import React from "react";
import personImg from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
  return (
    <div className="md:flex text-left items-center md:items-end bg-violet-100 px-4">
      <div className="md:pb-6 my-auto pb-3">
        <h1 className="font-bold text-5xl my-2">
          One Step Closer To Your
          <span className="text-blue-700 mt-6"> Dream Job</span>
        </h1>
        <p className="my-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button type="button" className="btn-primary">
          Get Started
        </button>
      </div>
      <div className="">
        <img
          className=" mx-auto block max-h-full pb-0 mb-0 md:ml-auto"
          src={personImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

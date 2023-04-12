import React from "react";
import personImg from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
  return (
    <div className="md:flex items-center md:items-end lg:max-h-64 bg-violet-100 px-4">
      <div className="md:pb-6 pb-3">
        <h1 className="font-bold text-5xl my-1">
          One Step Closer To Your <br />
          <span className="text-blue-700"> Dream Job</span>
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
      <div className="w-full h-64">
        <img
          className="object-cover mx-auto block max-h-full pb-0 mb-0 md:ml-auto"
          src={personImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

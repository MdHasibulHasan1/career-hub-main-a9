import React from "react";

const Banner = () => {
  return (
    <div className="md:flex ">
      <div>
        <h1 className="font-bold text-5xl my-1">
          One Step Closer To Your
          <span className="text-blue-700"> Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button type="button" className="btn-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;

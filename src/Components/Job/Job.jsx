import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    id,
  } = job;
  return (
    <div className="px-5 py-3 rounded bg-slate-200">
      <img src={company_logo} alt="" />
      <h2 className="font-bold">{job_title}</h2>
      <h3>{company_name}</h3>
      <div className="flex gap-3 items-center">
        <h3 className="border-2 inline text-blue-600 px-2 py-1 mt-2 border-blue-700">
          {remote_or_onsite}
        </h3>
        <h3 className="border-2 inline text-blue-600 px-2 py-1 mt-2 border-blue-700">
          {fulltime_or_parttime}
        </h3>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          {/* <img src="" alt="" /> */}
          <h3>{location}</h3>
        </div>
        <div className="flex gap-2">
          {/* <img src="Frame.png" alt="" /> */}
          <h3>{salary}</h3>
        </div>
      </div>

      <button type="button" className="btn-primary">
        <Link to={`/jobs/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Job;

import React from "react";
import { Link } from "react-router-dom";
import addressIcon from "../../assets/Icons/Frame-4.png";
import salaryIcon from "../../assets/Icons/Frame.png";
const ShowAppliedJobs = ({ job }) => {
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
    <div className="border-2 border-gray-900 mb-2 md:mb-0  p-4 md:flex grid grid-cols-1  gap-3 items-center">
      <div className="bg-slate-100 w-3/12 h-full md:p-6  lg:p-12">
        <img className="w-40 mx-auto block" src={company_logo} alt="" />
      </div>
      <div className="md:w-6/12">
        <h3>{job_title}</h3>
        <h3>{company_name}</h3>
        <div className="flex gap-2 items-center">
          <h3 className="border-2 inline text-blue-600 px-2 mr-3 md:mr-0 py-1 mt-2 border-blue-700">
            {remote_or_onsite}
          </h3>
          <h3 className="border-2 inline text-blue-600 px-2 py-1 mt-2 border-blue-700">
            {fulltime_or_parttime}
          </h3>
        </div>
        <div className="flex flex-wrap  items-center my-2 gap-3">
          <h3 className="flex h-4 items-center">
            <img className="w-4" src={addressIcon} alt="" />
            {location}
          </h3>
          <h3 className="flex h-4 items-center">
            <img className="w-4" src={salaryIcon} alt="" />
            Salary: {salary}
          </h3>
        </div>
      </div>
      <div className="md:w-3/12">
        <button type="button" className="btn-primary">
          <Link to={`/job/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;

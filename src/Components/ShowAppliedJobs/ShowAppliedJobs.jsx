import React from "react";
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
  console.log(job);
  return (
    <div className="border-2 border-gray-900  p-4 flex gap-3 items-center">
      <div className="bg-slate-100 w-3/12  h-44 flex items-center p-6">
        <img className="w-6/12 mx-auto  block" src={company_logo} alt="" />
      </div>
      <div className="grow">
        <h3>{job_title}</h3>
        <h3>{company_name}</h3>
        <div className="flex gap-3 items-center">
          <h3 className="border-2 inline text-blue-600 px-2 py-1 mt-2 border-blue-700">
            {remote_or_onsite}
          </h3>
          <h3 className="border-2 inline text-blue-600 px-2 py-1 mt-2 border-blue-700">
            {fulltime_or_parttime}
          </h3>
        </div>
        <div className="flex items-center mt-2 gap-3">
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
      <div>
        <button type="button" className="btn-primary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;

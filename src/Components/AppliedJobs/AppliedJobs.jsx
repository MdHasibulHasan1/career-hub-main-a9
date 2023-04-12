import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../../App";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";
import SetBanner from "../SetBanner/SetBanner";
import "./AppliedJobs.css";
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext || []);
  const [jobs, setJobs] = useState(appliedJobs);

  const handleOnsite = () => {
    if (jobs.filter((job) => job.remote_or_onsite !== "Onsite")) {
      setJobs(appliedJobs);
    }
    const Onsite = appliedJobs.filter(
      (job) => job.remote_or_onsite === "Onsite"
    );

    setJobs(Onsite);
  };
  const handleRemote = () => {
    if (jobs.filter((job) => job.remote_or_onsite !== "Remote")) {
      setJobs(appliedJobs);
    }
    const remote = appliedJobs.filter(
      (job) => job.remote_or_onsite === "Remote"
    );

    setJobs(remote);
  };

  return (
    <div className="">
      <SetBanner>Applied Jobs</SetBanner>
      <div className="md:w-8/12 p-4 mx-auto">
        <div>
          <div className="dropdown dropdown-bottom dropdown-end flex justify-end ">
            <label tabIndex={0} className="btn m-1">
              Filter By
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={handleOnsite}>
                <a>Show Onsite</a>
              </li>
              <li onClick={handleRemote}>
                <a>Show Remote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded text-left flex flex-col gap-4 ">
          {jobs.map((job) => (
            <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

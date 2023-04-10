import React, { useContext, useState } from "react";
import { JobsContext, SavedContext } from "../../App";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";
import "./AppliedJobs.css";
const AppliedJobs = () => {
  const allJobs = useContext(JobsContext || []);
  const savedJob = useContext(SavedContext || []);
  const [jobs, setJobs] = useState(savedJob);

  const handleOnsite = () => {
    const Onsite = jobs.filter((job) => job.remote_or_onsite === "Onsite");
    setJobs(Onsite);
  };
  const handleRemote = () => {
    const remote = jobs.filter((job) => job.remote_or_onsite === "Remote");
    if (!remote) {
      setJobs(savedJob);
    } else {
      setJobs(remote);
    }
  };

  return (
    <div className="">
      <div className="addBackground addBg -mt-16 h-64 bg-violet-100">
        <h3 className="text-3xl font-bold pt-20">Job Details</h3>
      </div>
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

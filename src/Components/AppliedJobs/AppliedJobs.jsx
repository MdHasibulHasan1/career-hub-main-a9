import React, { useContext, useState } from "react";
import { JobsContext, SavedContext } from "../../App";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";

const AppliedJobs = () => {
  const allJobs = useContext(JobsContext || []);
  const savedJob = useContext(SavedContext || []);
  const [jobs, setJobs] = useState(savedJob);

  const handleOnsite = () => {
    const Onsite = jobs.filter((job) => (job.remote_or_onsite = "Onsite"));
    setJobs(Onsite);
  };

  return (
    <div className="w-8/12 p-4 mx-auto">
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
            <li>
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
  );
};

export default AppliedJobs;

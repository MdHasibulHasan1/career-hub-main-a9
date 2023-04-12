import React, { useContext, useEffect, useState } from "react";
import { JobsContext } from "../../App";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";
import SetBanner from "../SetBanner/SetBanner";
import "./AppliedJobs.css";
import { getShoppingCart } from "../../utilities/fakedb";
const AppliedJobs = () => {
  const [jobF, setJobF] = useState([]);
  const [jobs, setJobs] = useState([]);
  const allJobs = useContext(JobsContext || []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedJob = [];
    for (const id in storedCart) {
      const addedJob = allJobs.find((job) => job.id === id);
      if (addedJob) {
        const quantity = storedCart[id];
        addedJob.quantity = quantity;
        savedJob.push(addedJob);
      }
    }
    setJobs(savedJob);
    setJobF(savedJob);
  }, []);
  // Handle Onsite Jobs
  const handleOnsite = () => {
    if (jobF.filter((job) => job.remote_or_onsite !== "Onsite")) {
      setJobF(jobs);
    }
    const Onsite = jobs.filter((job) => job.remote_or_onsite === "Onsite");
    setJobF(Onsite);
  };
  // Handle Remote Jobs
  const handleRemote = () => {
    if (jobF.filter((job) => job.remote_or_onsite !== "Remote")) {
      setJobF(jobs);
    }
    const remote = jobs.filter((job) => job.remote_or_onsite === "Remote");
    setJobF(remote);
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
          {jobF.map((job) => (
            <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

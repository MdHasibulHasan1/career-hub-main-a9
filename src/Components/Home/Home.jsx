import React, { useContext, useEffect, useState } from "react";
import { JobsContext } from "../../App";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Job from "../Job/Job";

const Home = () => {
  const allJobs = useContext(JobsContext || []);
  const [categories, setCategories] = useState([]);

  const [jobs, setJobs] = useState(allJobs.slice(0, 4));
  const handleShowAll = () => {
    setJobs(allJobs);
  };

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="px-4">
          <h1 className="text-3xl font-medium mt-6 my-3">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-6 gap-4 justify-between">
            {categories.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h1 className="text-3xl my-3 font-medium">Featured Jobs</h1>
        <p className="mb-6 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between text-left gap-5">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        {jobs.length < 5 && (
          <button
            type="button"
            onClick={handleShowAll}
            className="btn-primary my-3"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

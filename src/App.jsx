import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
export const JobsContext = createContext([]);
export const SavedContext = createContext([]);
export const AppliedJobsContext = createContext([]);
function App() {
  const { allJobs, savedJob } = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState(savedJob);
  return (
    <div className="App w-11/12 mx-auto">
      <AppliedJobsContext.Provider value={[appliedJobs, setAppliedJobs]}>
        <JobsContext.Provider value={allJobs}>
          <SavedContext.Provider value={savedJob}>
            <Header></Header>

            <Outlet></Outlet>
          </SavedContext.Provider>
        </JobsContext.Provider>
      </AppliedJobsContext.Provider>
    </div>
  );
}

export default App;

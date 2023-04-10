import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home/Home";
import { Outlet, useLoaderData } from "react-router-dom";
export const JobsContext = createContext([]);
export const SavedContext = createContext([]);
function App() {
  const [count, setCount] = useState(0);
  const { allJobs, savedJob } = useLoaderData();

  console.log(savedJob);
  return (
    <div className="App w-11/12 mx-auto">
      <JobsContext.Provider value={allJobs}>
        <SavedContext.Provider value={savedJob}>
          <Header></Header>

          <Outlet></Outlet>
        </SavedContext.Provider>
      </JobsContext.Provider>
    </div>
  );
}

export default App;

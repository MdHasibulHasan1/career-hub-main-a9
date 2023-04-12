import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const JobsContext = createContext([]);
function App() {
  const allJobs = useLoaderData();
  return (
    <div className="App md:max-w-7xl md:mx-auto mx-2 sm:mx-0">
      <JobsContext.Provider value={allJobs}>
        <Header></Header>

        <Outlet></Outlet>
      </JobsContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;

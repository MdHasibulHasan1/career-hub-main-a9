import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import JobDetail from "./Components/JobDetail/JobDetail";
import { jobsLoader } from "./loaders/jobsLoader";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: jobsLoader,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/applied_jobs", element: <AppliedJobs></AppliedJobs> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "job/:Id",
        element: <JobDetail></JobDetail>,
        loader: ({ params }) => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

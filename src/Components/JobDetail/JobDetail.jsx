import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import phone from "../../assets/Icons/Frame-2.png";
import email from "../../assets/Icons/Frame-3.png";
import address from "../../assets/Icons/Frame-4.png";
import salaryIcon from "../../assets/Icons/Frame.png";
import jobIcon from "../../assets/Icons/Frame-1.png";
import SetBanner from "../SetBanner/SetBanner";
import toast from "react-hot-toast";
const JobDetail = () => {
  const jobDetail = useLoaderData();
  const { Id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const found = jobDetail.find((jD) => jD.id == Id);
    setData(found);
  }, [Id]);

  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = data;

  const handleAppliedJob = (data) => {
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      if (id === data.id) {
        toast.success("already Applied!");
      }
    }
    addToDb(data.id);
  };

  return (
    <div className="">
      <SetBanner>Job Details</SetBanner>
      <div className="md:flex px-4 mt-4 text-left gap-3 mx-auto">
        <div className=" w-full md:w-8/12">
          <p>
            <span className="font-bold ">Job Description:</span>{" "}
            {job_description}
          </p>
          <p>
            <span className="font-bold ">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold ">
              Educational Requirements: <br />
            </span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold ">
              Experiences: <br />
            </span>
            {experiences}
          </p>
        </div>
        <div className="w-full md:w-4/12 ">
          <div className="bg-violet-100 rounded-md p-4">
            <h3 className="">Job Details</h3>
            <hr className="border-gray-400 my-2 opacity-50 border-1" />
            <h4 className="flex gap-2 items-center">
              <img className="w-4 block" src={salaryIcon} alt="" />
              Salary: {salary}
            </h4>
            <h4 className="flex gap-2 items-center">
              <img className="w-4 block" src={jobIcon} alt="" />
              Job Title {job_title}
            </h4>
            <div className="">
              <h3>Contact Information</h3>
              <hr className="border-gray-400 my-2 opacity-50 border-1" />
              <h4 className="flex gap-2 items-center">
                <img className="w-4 block" src={phone} alt="" />
                phone: {contact_information?.phone}
              </h4>
              <h4 className="flex gap-2 items-center">
                <img className="w-4 block" src={email} alt="" />
                email: {contact_information?.email}
              </h4>
              <h4 className="flex gap-2 items-center">
                <img className="w-4 block" src={address} alt="" />
                address: {location}
              </h4>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleAppliedJob(data)}
            className="btn-primary w-full mx-auto my-3"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

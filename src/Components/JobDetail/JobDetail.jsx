import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import phone from "../../assets/Icons/Frame-2.png";
import email from "../../assets/Icons/Frame-3.png";
import address from "../../assets/Icons/Frame-4.png";
import salaryIcon from "../../assets/Icons/Frame.png";
import jobIcon from "../../assets/Icons/Frame-1.png";

const JobDetail = () => {
  const jobDetail = useLoaderData();
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
  } = jobDetail;
  const handleAppliedJob = (jobDetail) => {
    addToDb(jobDetail.id);
  };

  //   const handleAppliedJob=(jobDetail)=>{
  //     let newCart = []
  //     const exists = cart.find(
  //       existingProduct => existingProduct.id === product.id
  //     )
  //     if (!exists) {
  //       product.quantity = 1
  //       newCart = [...cart, product]
  //     } else {
  //       const rest = cart.filter(
  //         existingProduct => existingProduct.id !== product.id
  //       )
  //       exists.quantity = exists.quantity + 1
  //       newCart = [...rest, exists]
  //     }

  //     setCart(newCart)
  //     addToDb(product.id)

  //   }
  return (
    <div>
      <div className="addBackground addBg -mt-16 h-64 bg-violet-100">
        <h3 className="text-3xl font-bold pt-20">Job Details</h3>
      </div>
      <div className="md:flex mt-4 text-left gap-3 mx-auto">
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
            onClick={() => handleAppliedJob(jobDetail)}
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

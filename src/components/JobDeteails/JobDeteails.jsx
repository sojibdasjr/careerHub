import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./JobDeteails.css";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaSquarePhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
const JobDeteails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  return (
    <div>
      <h1 className="  text-center font-bold text-2xl backgroundImage bg-slate-100">
        Job Details
      </h1>

      {/* Deteails */}

      <div className="max-w-6xl mx-auto md:p-1 p-2 ">
        <div className="grid gap-7 md:grid-cols-5 md:my-14 ">
          {/* Description */}
          <div className="  md:col-span-3">
            <h1 className="my-2">
              <span className="font-bold">Job Description</span> :{" "}
              {job.description}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Job Responsibility</span> :{" "}
              {job.responsibility}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Educational Requirements:</span> :{" "}
              <br /> {job.education_requirements}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Experiences::</span> : <br />{" "}
              {job.experiences}
            </h1>
          </div>

          {/* Job Apply */}
          <div className="bg-sky-100 md:px-5 px-2 rounded md:col-span-2">
            <h1 className="font-bold my-2 border-b-2  py-4 border-sky-300 mx-auto">
              Job Details
            </h1>{" "}
            <span className="flex items-center my-2 gap-2">
              <SlCalender />{" "}
              <p>
                <span className="font-bold">Job Title </span> : {job.job_title}{" "}
              </p>
            </span>{" "}
            <span className="flex items-center  gap-2">
              <RiMoneyCnyCircleLine />{" "}
              <p>
                {" "}
                <span className="font-bold">Salary </span> : {job.salary} (Per
                Month)
              </p>
            </span>
            <h1 className="font-bold my-2 border-b-2  py-4 border-sky-300 mx-auto">
              Contact Information
            </h1>
            <span className="flex items-center gap-2">
              <FaSquarePhone />{" "}
              <p>
                <span className="font-bold">Phone</span> : {job.contact.phone}{" "}
              </p>
            </span>
            <span className="flex items-center gap-2 my-2">
              <SiMinutemailer />{" "}
              <p>
                <span className="font-bold">Email</span> : {job.contact.email}{" "}
              </p>
            </span>
            <span className="flex items-center gap-2 my-2">
              <IoLocationSharp />{" "}
              <p>
                <span className="font-bold">Address</span> :{" "}
                {job.contact.address}{" "}
              </p>
            </span>
            <Link>
              <button className="w-full p-2 focus:bg-sky-600 rounded  my-2 bg-sky-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDeteails;

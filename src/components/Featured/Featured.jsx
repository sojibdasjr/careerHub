import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Featured = ({ job }) => {
  const {
    image,
    job_title,
    company_name,
    contact,
    job_time,
    job_time2,
    salary,
  } = job;
  return (
    <div className=" p-5  border">
      <img className="max-h-45 max-w-32 " src={image} alt="" />
      <h1 className="font-bold text-2xl tracking-wide">{job_title}</h1>
      <h1 className="opacity-70">{company_name}</h1>
      <div>
        <button className="p-1 border border-sky-500 bg-sky-100 text-sm my-1 ">
          {job_time}
        </button>
        <button className="p-1 border border-sky-500 bg-sky-100 text-sm my-1 ms-4 ">
          {job_time2}
        </button>
      </div>
      <div className="md:flex gap-6 ">
        <div className="flex items-center gap-1 my-2">
          <IoLocationSharp />
          <small>{contact.address}</small>
        </div>
        <div className="flex items-center gap-1">
          <RiMoneyCnyCircleLine />
          <small>{salary}</small>
        </div>
      </div>
      <Link>
        <button className="p-2 my-3 bg-red-400 rounded">View Details</button>
      </Link>
    </div>
  );
};

export default Featured;

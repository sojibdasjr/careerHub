import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDeteails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  return (
    <div className="max-w-6xl mx-auto">
      <h1>Job Deteails {job.job_title}</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border border-red-300 md:col-span-3"></div>
        <div className="border border-red-300"></div>
      </div>
    </div>
  );
};

export default JobDeteails;

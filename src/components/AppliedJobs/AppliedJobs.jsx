import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplication } from "../Utilitys/localStroage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsId = getStroedJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h1>Applied Jobs {appliedJobs}</h1>
    </div>
  );
};

export default AppliedJobs;

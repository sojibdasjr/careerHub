import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl  mt-10">Featured Jobs</h1>
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-2 mx-5 my-5">
        {jobs.map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
      <Link>
        <h1 className="text-center p-2 bg-sky-400 w-40 rounded my-5 mx-auto">
          Show All Jobs
        </h1>
      </Link>
    </div>
  );
};

export default FeaturedJobs;

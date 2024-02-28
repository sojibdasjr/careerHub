import React, { useEffect, useState } from "react";
import Featured from "./Featured";

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
      <div className="grid md:grid-cols-2 items-center gap-2 mx-5 mb-2">
        {jobs.map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;

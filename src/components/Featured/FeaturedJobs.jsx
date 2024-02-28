import React, { useEffect, useState } from "react";
import Featured from "./Featured";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLangth, setDataLength] = useState(4);
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
      <div className="grid md:grid-cols-2 items-center gap-2  my-5 max-w-6xl mx-auto ">
        {jobs.slice(0, dataLangth).map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
      <div
        className={dataLangth === jobs.length ? "hidden" : "flex items-center"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className=" p-2 bg-sky-400 w-40 rounded my-5 mx-auto"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

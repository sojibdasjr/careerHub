import React from "react";
import hero from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" flex items-center bg-slate-100">
      <div className="w-2/3 mx-5">
        <h1 className="text-5xl font-bold">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-red-400">Dream Job</span>
          <p className="text-sm my-2 opacity-75">
            Explore thousands of job opportunities with all <br /> the
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <Link>
            <button className="p-3  rounded-md text-xl bg-red-400">
              Get Started
            </button>
          </Link>
        </h1>
      </div>
      <div className="w-2/1 mx-5">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;

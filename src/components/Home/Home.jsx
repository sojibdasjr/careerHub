import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import Hero from "../hero/Hero";
import FeaturedJobs from "../Featured/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;

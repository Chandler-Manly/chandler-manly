import React from "react";
import "../assets/Home.css";
import Layout from "../components/shared/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="athlete">
        <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618529762/8i6bcuq3w789iu1e_b9vfsg.jpg" alt="athlete"/>
        </div>
      </div>
      <div>
        <div className="home-text">
        </div>
        </div>
    </Layout>
  );
};

export default Home;
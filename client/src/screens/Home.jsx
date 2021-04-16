import React from "react";
import "../assets/Home.css";
import Layout from "../components/shared/Layout";
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <Layout>
      <div className="home">
      <div className="welcome-message">
        Salutations! I'm <div className="chandler">Chandler</div> and I am a Full Stack Software Engineer.
      </div>
      <Link to='/portfolio'><div className="view-portfolio">View Portfolio</div></Link>
      </div>
    </Layout>
  );
};

export default Home;
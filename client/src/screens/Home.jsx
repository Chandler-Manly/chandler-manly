import React from "react";
import "../assets/Home.css";
import Layout from "../components/shared/Layout";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="welcome-message">
          Salutations! I'm <div className="chandler">Chandler</div> and I am a
          Full-Stack Software Engineer.
        </div>

        <Link to="/portfolio">
          <div className="view-portfolio">VIEW PORTFOLIO</div>
        </Link>
        <div>
          <h3>Finance, Entrepreneurship, and Technology</h3>
          I recently completed General Assembly's Software Engineering Immersive
          program. During this twelve week boot camp, I learned programming
          languages and frameworks, computer science concepts, and agile
          methodology. More importantly, I met and had the privilege to work
          with some truly inspiring, saavy, and kind people. A few notable
          highlights include:
          <br />
          <br />
          <li>Drawing a blank during my first whiteboard challenge and subsequently spending the weekend on codewars</li>
          <li>Referring to Tom Brady when asked, "What's a MVP?" then learning firsthand how to <b>design, develop, and deploy</b> three independent projects and one collaborative</li>
          <li>
            Sharing my favorite breakfast is an ultimate smoked Salmon bagel and cortados
          </li>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

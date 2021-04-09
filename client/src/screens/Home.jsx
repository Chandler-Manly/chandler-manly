import React from 'react';
import '../assets/Home.css';
import ProjectCards from '../components/ProjectCards';
import Layout from '../components/shared/Layout';

const Home = () => {
  return (
    <Layout>
      <h3>About Me</h3>
      <div className="about-me">A determined, analytical, and adaptable Software Engineer with seven years experience in finance, consumer products, and technology. Passionate about building great products, meaningful relationships, and delivering world class experiences.
      </div>
      <h3>Skills</h3>
      <div className="skills">Programming languages, team player, frameworks, financial analysis and business strategy and planning, product road map, customer service, governance</div>
      <div className="home">
        <ProjectCards />
        
      </div>
    </Layout>
  )
}

export default Home
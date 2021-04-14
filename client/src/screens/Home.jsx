import React from 'react';
import '../assets/Home.css';
import Projects from '../components/Projects';
import Layout from '../components/shared/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="home-screen">
        <div className="headshot">
          <img className="img" src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618234955/Howard_2373_wn6qrg.jpg" alt="Chandler-Manly" />
          </div>
      <h3>About Me</h3>
      <div className="about-me">
        Greetings, I'm Chandler. I am a determined, analytical, and adaptable Product Manager with seven years experience across a wide range of verticals including finance, consumer products, and technology(most recently). I am passionate about building great products, meaningful relationships, and delivering world class experiences. 
      </div>
      {/* <h3>Skills</h3>
      <div className="programming-skills">
        <h5>Languages and Frameworks</h5>
        Programming languages, team player, frameworks, financial analysis and business strategy and planning, product road map, customer service.
        </div>
      <div className="design-skills">
        <h5>Design</h5>
        Wireframes, prototyping, ERD, Adobe XD, Whimsical, Draw.io
        </div>
      <div className="soft-skills">
        <h5>Soft</h5>
        Written and verbal communication, ...
        </div>
      <div className="excited-about">
        <h5>Most excited about</h5>
        Cloud infrastructure, machine learning, artificial intelligence, big data, Python, A/B testing, and SaaS
        </div> */}
      <div className="home">
        <Projects />
        </div>
        </div>
    </Layout>
  )
}

export default Home
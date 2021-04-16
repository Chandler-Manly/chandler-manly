import React from "react";
import Layout from "../components/shared/Layout";

export default function Connect() {
  return (
    <Layout>
      <div>
        <div className="headshot">
          <img
            className="img"
            src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618234955/Howard_2373_wn6qrg.jpg"
            alt="Chandler-Manly"
          />
        </div>
        <h3>About Me</h3>
        <div className="about-me">
          Greetings, I'm <div className="my-name-is-neo">Chandler Manly</div>. I
          am a determined, analytical, and adaptable Product Manager with seven
          years experience across a wide range of verticals including finance,
          consumer products, and technology(most recently). I am passionate
          about building great products, meaningful relationships, and
          delivering world class experiences.
        </div>

        <h3>Contact Form</h3>
        <div className="contact-form">
          <form
            method="POST"
            action="https://getform.io/f/254c8f44-74c2-4efc-9770-82b75edeb077"
          >
            <div className="form-group-one">
              <label>Name</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Subject</label>
              <input type="text" name="subject" />
              <label>Message</label>
              <textarea name="message" rows="5" />
              <div className="submit-button">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>

          <div className="follow-us-links">
            Connect:
            <a
              href="https://www.linkedin.com/in/chandler-manly/"
              className="fa fa-linkedin"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Chandler-Manly"
              className="fa fa-github"
            >
              Github
            </a>
            {/* <a
          href="https://drive.google.com/file/d/1I47NcD1EQ7PrvPwGK92XgPUsM6_blhpQ/view"
          className="resume"
        >
            Resume
        </a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

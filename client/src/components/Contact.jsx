import React from "react";
import "../assets/Contact.css";
import Layout from "./shared/Layout";

export default function ContactInfo() {
  return (
    <Layout>
      <div className="contact-form">
        <div className="contact">
          <h3>Contact Form</h3>
          <form>
            <label>Name</label>
            <input type="text" placeholder="name" />
            <label>Email</label>
            <input type="text" placeholder="email" />
            <label>Message:</label>
            <textarea className="comment">Enter text here...</textarea>
            <button>Connect</button>
          </form>
          <p>
            Always looking to connect please feel free to send an email to:
            manlychandler@gmail.com
          </p>
          <a
            href="https://www.linkedin.com/in/chandler-manly/"
            className="fa fa-linkedin"
          >
            Linkedin
          </a>
          <a href="https://github.com/Chandler-Manly" className="fa fa-github">
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1I47NcD1EQ7PrvPwGK92XgPUsM6_blhpQ/view"
            className="resume"
          >Resume
          </a>
        </div>
      </div>
    </Layout>
  );
}

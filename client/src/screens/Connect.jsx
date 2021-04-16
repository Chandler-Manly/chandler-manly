import React from "react";
import Layout from "../components/shared/Layout";
import '../assets/Connect.css'

export default function Connect() {
  return (
    <Layout backgroundColor={"#212a2f"}>
      <div>
        {/* <div className="headshot">
          <img
            className="img"
            src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618234955/Howard_2373_wn6qrg.jpg"
            alt="Chandler-Manly"
          />
        </div> */}
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



        </div>
      </div>
    </Layout>
  );
}

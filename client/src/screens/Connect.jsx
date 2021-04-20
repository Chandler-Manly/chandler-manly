import React from "react";
import Layout from "../components/shared/Layout";
import "../assets/Connect.css";

export default function Connect() {
  return (
    <Layout backgroundColor={"#212a2f"}>
      <div>
        <div className="profile">
          <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618234955/Howard_2373_wn6qrg.jpg" alt="profile" />
        </div>
        <h3>ABOUT ME</h3>
        <div className="about-me">
          Greetings, I'm <div className="my-name-is-neo">Chandler Manly</div>. I
          am a determined, analytical, and adaptable Product Manager with seven
          years experience across a wide range of verticals including finance,
          consumer products, and technology(most recently). I am passionate
          about building great products, meaningful relationships, and
          delivering world class experiences.
        </div>
        <div className="additional-context">
          <h3>Why General Assembly?</h3>
          While studying for the GMAT exam, I came across a free workshop hosted
          by General Assembly. I checked on Linkedin if anyone in my network had
          any association with the organization, and sure enough one of my
          friends went through the web development immersive. I phoned him and
          we chatted about his experience and I hung up the phone excited to
          attend. This weekend workshop was where I gained exposure to HTML,
          CSS, and Javascript. I have always been curious about computer science
          and programming and thought this would be a productive way to see if I
          was truly interested. And indeed, it was. I had an engaging instructor
          and a collaborative and friendly cohort that did not mind my lack of
          experience. By Sunday evening, I had created a blog web-application
          and was hooked. I loved how intricate the problem solving process was.
          I found that while grammar and syntax play a key role, so does
          critical reasoning and logic. I also found the joy of debugging
          successfully greatly outweighed the frustration of that errant comma.
          So naturally on Monday morning, I started my application for GA’s
          Software Engineering Immersive program and embarked on my journey into
          software engineering.
          <h3>Most Excited About...</h3>I am most excited by the opportunity to
          work collaboratively with people from a myriad of backgrounds on
          complex problems that have simple and elegant solutions. As a Software
          Engineer and Product Manager, I am thrilled that there will always be something new to
          learn. I quickly found out that my positive attitude, competitive
          drive, and growth mindset will be a perfect pairing for this industry
          and a career in this field will give me the opportunity to further
          develop my fundamental skills and knowledge base.
        </div>

        <div className="resume">
          <a href="https://drive.google.com/file/d/1tfObRsQOH_BysNJYb3Dfil5udCvgWU9k/view?usp=sharing" className="fa fa-file-pdf-o" aria-hidden="true"> H. Chandler Manly Resume SWE | PM</a >
        </div>
        <h3>MEDIA INQUIRIES:</h3>
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

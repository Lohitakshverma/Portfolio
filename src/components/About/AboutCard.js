import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lohitaksh Verma </span>
            from <span className="purple"> Jaipur(Raj), India.</span>
            <br />
            I am currently working on my DevOps and AWS skills.
            <br />
            I have completed B.Tech, in Computer Sciece and Technology form Global Institute of Technology
            Mesra.
            <br />
            <br />
            Apart from DevOps, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lohitaksh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

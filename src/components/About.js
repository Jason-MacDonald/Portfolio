import React from "react";

const About = () => {
  return (
    <div
      id="about"
      style={{
        paddingTop: "200px",
        paddingBottom: "200px",
        backgroundColor: "teal",
      }}
    >
      <div className="ui items container">
        <div className="item">
          <div className="image avatar">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHqzHcWZ_-6Jw/profile-displayphoto-shrink_200_200/0/1519962135896?e=1611792000&v=beta&t=RTgtx3dzT5IXecG78WwakDpCu9sombWsT5ermG82Rn8"
              alt="avatar"
            />
          </div>
          <div className="ui content">
            <h1 className="ui header" style={{ color: "white" }}>
              About Me
            </h1>
            <div className="meta" style={{ color: "white" }}>
              <h2>
                <i>Front-End Web Developer from Nelson, New Zealand.</i>
              </h2>
            </div>
            <div className="description" style={{ color: "white" }}>
              <h3>Personal message.</h3>
            </div>
            <br />
            <br />
            <h1 className="ui header" style={{ color: "white" }}>
              Contact Details
            </h1>
            <div className="description" style={{ color: "white" }}>
              <p style={{ fontSize: "1.5em" }}>
                <b>GitHub:</b>{" "}
                <a
                  href="https://github.com/Jason-MacDonald"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Jason-MacDonald
                </a>
              </p>
              <p style={{ fontSize: "1.5em" }}>
                <b>Linkedin:</b>{" "}
                <a
                  href="https://www.linkedin.com/in/jason-macdonald-624687158/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/jason-macdonald-624687158/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

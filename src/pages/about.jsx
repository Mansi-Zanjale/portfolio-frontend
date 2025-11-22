import Tools from "../components/tools";

const About = () => {
  return (
    <div className="about-bg">
      <div className="about">
        <img src="/mansi.png" className="overlay-img" />
        <div className="first">
          <h1>MANSI ZANJALE</h1>

          <span className="bio">
            I’m Mansi Zanjale, a Web Developer with a knack for creating
            beautiful, functional websites. I focus on frontend development
            modern web technologies. I thrive on building projects that solve
            problems, engage users, and showcase creativity. My goal is to grow
            as a full-stack developer and contribute to projects that combine
            design, performance, and usability.
          </span>
        </div>
        <div className="second">
          <h2 className="sk">Skills</h2>
          <ul className="skills">
            <li>
              <i className="bi bi-code-square"></i>
              Frontend (HTML, CSS, JavaScript)
            </li>
            <li>
              <i className="bi bi-server"></i>
              Backend (PHP, Node.js)
            </li>
            <li>
              <i className="bi bi-database"></i>
              Databases (MYSQL)
            </li>
            <li>
              <i className="bi bi-stack"></i>
              Frameworks (React, Tailwind CSS, Bootstrap)
            </li>
          </ul>

          <Tools />
        </div>
      </div>
    </div>
  );
};

export default About;

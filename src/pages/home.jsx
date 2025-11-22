import Slider from "../components/slider";

const Home = () => {
  return (
    <div className="home">
      <h1>MANSI ZANJALE</h1>

      <p>
        <Slider />
      </p>

      <span className="tagline">
        Crafting seamless digital experiences that feel truly alive.
      </span>
      <a href="/resume.pdf" download="Mansi_Resume.pdf" className="resume-btn">
        Download Resume
      </a>
    </div>
  );
};

export default Home;

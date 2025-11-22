import { useState, useEffect } from "react";

const Slider = () => {
  const roles = ["Web Developer", "Frontend Developer", "FullStack Developer"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 20);

      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return <span className={animate ? "animate" : ""}>{roles[index]}</span>;
};

export default Slider;

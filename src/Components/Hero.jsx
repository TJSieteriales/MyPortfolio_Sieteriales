import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="small-title">HELLO, I AM</p>

        <h1>
          Taironne James
          <span>Sieteriales</span>
        </h1>

        <h2>Computer Science Student & Full Stack Web Developer</h2>

        <p>
          I build web applications using React, Vite, JavaScript, Laravel, PHP,
          and modern frontend technologies. Languages expert at is Java, C#, and
          Python
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="https://github.com/TJSieteriales"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-placeholder">TJ</div>
      </div>
    </section>
  );
}

export default Hero;

import { FaGithub } from "react-icons/fa";
import { portfolio } from "../data/portfolio";

function Navbar() {
  return (
    <nav className="top-nav">
      <a href="#home" className="brand">
        TJ<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>
      </div>

      <a
        href={portfolio.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        <FaGithub />
        GitHub
      </a>
    </nav>
  );
}

export default Navbar;

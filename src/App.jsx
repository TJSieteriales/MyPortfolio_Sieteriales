import profileImg from "./assets/TJProfile.png";
import "./App.css";

function App() {
  const email = "sieterialestj@gmail.com";
  const githubUrl = "https://github.com/TJSieteriales";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  // Replace this with your actual live deployment URL if you already have one
  const walangBrownoutLiveUrl = "https://your-walangbrownout-live-link.com";

  const featuredProject = {
    title: "Walang BrownOut Appliances",
    role: "Full Stack Developer",
    tech: "React • Vite • Laravel • MySQL • REST API",
    description:
      "A full-stack appliance and e-commerce platform focused on home comfort solutions. It includes a responsive frontend, backend API integration, product browsing, cart workflows, order handling, and database-backed functionality.",
    highlights: [
      "Responsive customer-facing UI",
      "Laravel backend integration",
      "Product catalog and shopping features",
      "Authentication and role-based flows",
      "Database-backed operations",
      "Deployment-ready structure",
    ],
    live: walangBrownoutLiveUrl,
  };

  const projects = [
    {
      title: "React System with Browser",
      tech: "React • Vite • React Router • Bootstrap",
      link: "https://github.com/TJSieteriales/ReactSysstemwithBrowserSieteriales",
    },
    {
      title: "Fetch Use Repo",
      tech: "React • Vite • Bootstrap",
      link: "https://github.com/TJSieteriales/FetchUseRepo",
    },
    {
      title: "FrontEnd Repository",
      tech: "React • Vite • Axios",
      link: "https://github.com/TJSieteriales/FrontEndRepository",
    },
    {
      title: "BackEnd Laravel",
      tech: "Laravel • PHP",
      link: "https://github.com/TJSieteriales/BackEndLaravel",
    },
    {
      title: "Computer Cafe Station Management System",
      tech: "Web Application",
      link: "https://github.com/TJSieteriales/CompCafeStationManagementSystemSieteriales",
    },
    {
      title: "REST API Sieteriales",
      tech: "REST API",
      link: "https://github.com/TJSieteriales/RestAPiSieteriales",
    },
    {
      title: "Week 12 Sieteriales",
      tech: "Applications Development",
      link: "https://github.com/TJSieteriales/Week12Sieteriales",
    },
    {
      title: "React Repository",
      tech: "React Fundamentals",
      link: "https://github.com/TJSieteriales/ReactRepo",
    },
  ];

  return (
    <div className="site-shell">
      <nav className="top-nav">
        <a href="#home" className="brand">
          TJ<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#featured">Featured</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-text">
            <p className="eyebrow">HELLO, I AM</p>

            <h1>
              Taironne James
              <span>Sieteriales</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              I build modern full-stack web applications using React, Vite,
              Laravel, PHP, MySQL, REST APIs, and responsive frontend design.
            </p>

            <div className="hero-buttons">
              <a
                href="https://github.com/TJSieteriales"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View GitHub
              </a>

              <a href="#featured" className="btn btn-secondary">
                Featured Project
              </a>

              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={profileImg}
                alt="Taironne James Sieteriales"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="content-section" id="about">
          <div className="section-header">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Professional Summary</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I am a Computer Science student with growing experience in
                frontend and backend development. My work focuses on building
                practical systems using React, Vite, Laravel, APIs, and MySQL.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I create responsive interfaces, connect frontend applications to
                backend services, organize project structures, and build
                user-focused systems for academic and development projects.
              </p>
            </div>

            <div className="about-card">
              <h3>Current Focus</h3>
              <p>
                My current focus is full-stack development, especially improving
                real-world application structure, UI quality, and API
                integration workflows.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section className="content-section" id="featured">
          <div className="section-header">
            <p className="eyebrow">FEATURED PROJECT</p>
            <h2>{featuredProject.title}</h2>
          </div>

          <div className="featured-project">
            <div className="featured-left">
              <p className="featured-role">{featuredProject.role}</p>

              <p className="featured-tech">{featuredProject.tech}</p>

              <p className="featured-description">
                {featuredProject.description}
              </p>

              <ul className="highlight-list">
                {featuredProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="featured-actions">
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Deployment
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="featured-right">
              <div className="project-preview-card">
                <div className="preview-badge">Highlighted Project</div>
                <h3>Walang BrownOut Appliances</h3>
                <p>
                  Home comfort solutions platform with frontend, backend, and
                  deployment-oriented structure.
                </p>

                <div className="preview-tags">
                  <span>React</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section" id="projects">
          <div className="section-header">
            <p className="eyebrow">PROJECTS</p>
            <h2>Other Repositories</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.tech}</p>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View Repository →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS / ACHIEVEMENTS */}
        <section className="content-section" id="achievements">
          <div className="section-header center">
            <p className="eyebrow">MY PROGRESS</p>
            <h2>Skills & Achievements</h2>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card">
              <strong>8+</strong>
              <span>Academic / Coursework Repositories</span>
            </div>

            <div className="achievement-card">
              <strong>React</strong>
              <span>Frontend Development</span>
            </div>

            <div className="achievement-card">
              <strong>Laravel</strong>
              <span>Backend Development Exposure</span>
            </div>

            <div className="achievement-card">
              <strong>GitHub</strong>
              <span>Version Control Practice</span>
            </div>
          </div>

          <div className="skill-bars">
            <div className="skill-item">
              <div className="skill-label">
                <span>React / Frontend</span>
                <span>85%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill skill-fill-85"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-label">
                <span>Laravel / Backend</span>
                <span>75%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill skill-fill-75"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-label">
                <span>API Integration</span>
                <span>80%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill skill-fill-80"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-label">
                <span>Git / GitHub</span>
                <span>82%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill skill-fill-82"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="content-section" id="contact">
          <div className="section-header">
            <p className="eyebrow">CONTACT</p>
            <h2>Let’s Connect</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Connect With Me</h3>
              <p>
                You can visit my GitHub, explore my repositories, or send me an
                email through Gmail.
              </p>

              <div className="contact-buttons">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>

                <a
                  href="https://github.com/TJSieteriales?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Repositories
                </a>

                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Open Gmail
                </a>
              </div>
            </div>

            <div className="contact-card email-box">
              <p className="email-label">Professional Email</p>
              <h3>{email}</h3>
              <p className="email-note">
                Hover-style information card for direct professional contact.
              </p>

              <div className="email-hover-card">
                <strong>Email Me</strong>
                <span>{email}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

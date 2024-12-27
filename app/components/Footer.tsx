import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <address className="social-links">
          <a
            href="https://www.linkedin.com/in/gina-horch"
            aria-label="Visit Gina's LinkedIn profile"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials-icon"
              src="./image/linkedin-icon-round.svg"
              alt="The LinkedIn logo"
              width="60px"
              loading="lazy"
            />
            <span>Gina's LinkedIn</span>
          </a>
          <a
            href="https://pages.evolves.com.au/pledge"
            title="AllyPledge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ally"
              src="./image/ally-pledge.webp"
              alt="Evolve Communities Ally Pledge"
              width="200px"
              loading="lazy"
            />
          </a>
          <a
            href="https://github.com/GinaHorch"
            aria-label="Visit Gina's GitHub profile"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials-icon"
              src="./image/github.svg"
              alt="The GitHub logo"
              width="60px"
              loading="lazy"
            />
            <span>Gina's GitHub</span>
          </a>
        </address>
      </section>
      <small>&copy; 2024 Social Insight Solutions</small>
    </footer>
  );
};

export default Footer;

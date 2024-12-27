const HeroSection = () => {
  return (
    <section className="hero">
      {/* Flex container */}
      <header className="hero-text">
        <h1>Empowering Change Through Technology</h1>
        <p>
            Bringing over two decades of investigative expertise and social science research into the tech industry. 
            With a proven track record in child protection, online safety, and tackling complex challenges, I combine forensic precision, research-driven insights, 
            and full-stack development skills to create innovative, impactful solutions.

            As a proud ally to Aboriginal and Torres Strait Islander peoples, I am deeply committed to reconciliation, 
            closing the gap, and ensuring technology uplifts and supports all communities. Together, let's build a safer, smarter, and more inclusive digital future.
        </p>

        <div className="hero-links">
          <a href="./projects.tsx">
            <i className="fa-solid fa-diagram-project"></i>
            <span>My tech projects</span>
          </a>
          <a href="./sis.tsx">
            <i className="fa-solid fa-hand"></i>
            <span>Social Insight Solutions</span>
          </a>
          <a href="./contact.tsx">
            <i className="fa-solid fa-envelope"></i>
            <span>Get in touch</span>
          </a>
        </div>
      </header>

      <div className="hero-image">
        <img
          src="./image/GinaHeadShot.webp"
          alt="Gina's head shot."
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;


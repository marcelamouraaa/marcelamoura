export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="section-label">About Me</div>
        <h2 className="about-title">Who Am I?</h2>
        <p className="about-description">
          I am an undergraduate student studying Data Science and Applied Physics at the New Jersey Institute
          of Technology. I have a strong passion for machine learning and its applications to real-world problems.
          I believe data is the key to understanding the unknown, and I'm excited to use my skills to discover something new.

          During my time at NJIT, I've worked on magnetospheric studies, contributing to the <a href="https://sites.google.com/njit.edu/maglab">Magnetospheric Science Research Lab</a> at the Center for Solar-Terrestrial Research (CSTR). 
          I developed a model to better understand wave propagation and presented findings at the 2025 American Geophysical Union (AGU) conference. 
          I also serve as Vice President of the <a href="https://njitsps.vercel.app/">Society of Physics Students</a>.
        </p>
        <p className="about-description">
          Outside of academia, I love to hike, read, and train for races. I'm always excited to
          connect with other physics and data enthusiasts in the field!

        </p>
        <div className="resume-buttons">
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-secondary">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className="project-list">
        <article className="project-card">
          <h3>
            GAIA <span> 1st Place Hackathon Project</span>
          </h3>
          <p>
            AI chatbot designed to support women on campus by connecting them
            with resources, guidance, and community.
          </p>
          <a className="project-link" href="https://github.com/nidhisakpal/GirlHacks25">
            View on GitHub
          </a>
        </article>
        <article className="project-card">
          <h3>ERICA</h3>
          <p>
            Graph-RAG system that uses a structured knowledge graph and large
            language model to generate source-grounded answers to student
            questions.
          </p>
        </article>
        <article className="project-card">
          <h3>Mini-Project</h3>
          <p>Star Classification</p>
        </article>
      </div>
    </>
  );
}

export default function Projects() {
  const projects = [
    {
      type: "Industry • Artificial Intelligence",
      title: "ERICA - AI Tutor",
      description:"A tutoring service for students learning about Artifical Intelligence. Implemented a Graph-RAG system that constructs a knowledge graph, retrieves relevant nodes, and uses LLM-generated tutoring responses from sourced data.",
      tags: ["Python", "Docker", "SQL"],
      github: "https://github.com/marcelamouraaa/Erica-AI-Tutor"
    },
    {
      type: "Research • Magnetospheric Physics/Machine Learning",
      title: "XGBoost Model for Propagation Analysis",
      description: "Developed an XGBoost model to investigate the propagation of electromagnetic ion cyclotron (EMIC) waves in the Earth's magnetosphere, using satellite and ground-based data.",
      tags: ["Python", "Jupyter Notebook"],
      github: ""
    },
    {
      type: "Industry • Artificial Intelligence",
      title: "GAIA – First Place at GirlHacks 2025",
      description: "A greek goddess-themed, campus specific mentorship app tailored for women– implemented a Gemini chatbot with dynamic goddess personas that adapt to user needs.",
      tags: ["Python", "JavaScript"],
      github: "https://github.com/nidhisakpal/GirlHacks25"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-type">{project.type}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

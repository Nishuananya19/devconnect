
import { useEffect, useState } from "react";
import { GitBranch, ExternalLink, Star, GitFork } from "lucide-react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&per_page=6"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch projects. Please try again.");
        }

        const data = await response.json();
        setProjects(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span>EXPLORE PROJECTS</span>
        <h2>Discover Amazing <strong>Projects</strong></h2>
        <p>
          Explore popular open-source repositories built
          by developers around the world.
        </p>
      </div>

      {loading && (
        <p className="api-message">Loading projects...</p>
      )}

      {error && (
        <div className="api-error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="api-message">No projects found.</p>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-top">
                <GitBranch size={28} />
                <span className="project-language">
                  {project.language || "JavaScript"}
                </span>
              </div>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description ||
                  "An open-source project built by the developer community."}
              </p>

              <div className="project-stats">
                <span>
                  <Star size={16} />
                  {project.stargazers_count.toLocaleString()}
                </span>

                <span>
                  <GitFork size={16} />
                  {project.forks_count.toLocaleString()}
                </span>
              </div>

              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Repository <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;

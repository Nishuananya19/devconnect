
import { ArrowRight, GitBranch, Code2, Users, Zap } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <Zap size={15} />
          Built for developers, by developers
        </div>

        <h1>
          Build Together.
          <br />
          <span>Grow Together.</span>
        </h1>

        <p>
          Connect with developers, collaborate on real-world projects,
          share knowledge and turn your ideas into reality.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            Explore Projects <ArrowRight size={18} />
          </a>

          <a href="#features" className="secondary-btn">
            Discover Features
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <Users />
            <strong>Community</strong>
            <small>Connect & learn</small>
          </div>

          <div>
            <GitBranch />
            <strong>Open Source</strong>
            <small>Build together</small>
          </div>

          <div>
            <Code2 />
            <strong>Real Projects</strong>
            <small>Show your skills</small>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-header">
            <span></span><span></span><span></span>
            <small>collaboration.jsx</small>
          </div>
          <pre>
{`const developer = {
  skills: ["React", "Node.js"],
  passion: "Building",
  community: "DevConnect"
};

function growTogether() {
  return collaborate();
}`}
          </pre>
          <div className="code-footer">
            <span>● Live Collaboration</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

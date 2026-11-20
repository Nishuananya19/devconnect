
import {
  Code2,
  GitBranch,
  BriefcaseBusiness,
  Send,
  ArrowUp
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <a href="#home" className="logo">
            <Code2 size={28} />
            DevConnect
          </a>

          <p>
            A community where developers connect,
            collaborate, learn and build amazing things together.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank"
              rel="noopener noreferrer" aria-label="GitHub">
              <GitBranch />
            </a>

            <a href="https://linkedin.com" target="_blank"
              rel="noopener noreferrer" aria-label="LinkedIn">
              <BriefcaseBusiness />
            </a>

            <a href="https://twitter.com" target="_blank"
              rel="noopener noreferrer" aria-label="Twitter">
              <Send />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>
          <a href="#features">Features</a>
          <a href="#projects">Projects</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-links">
          <h4>Community</h4>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <a href="#home">About</a>
        </div>

        <div className="footer-links">
          <h4>Get Started</h4>
          <a href="#projects">Explore Projects</a>
          <a href="#contact">Join Community</a>
          <a href="#pricing">View Plans</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} DevConnect.
          All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

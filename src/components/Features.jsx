
import {
  Users,
  Code2,
  Rocket,
  Brain,
  ShieldCheck,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Developer Community",
    description:
      "Connect with developers, exchange ideas and build meaningful professional relationships."
  },
  {
    icon: Code2,
    title: "Collaborative Coding",
    description:
      "Work together on real-world projects and improve your coding skills through collaboration."
  },
  {
    icon: Rocket,
    title: "Project Showcase",
    description:
      "Showcase your projects and demonstrate your technical skills to potential employers."
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Discover smarter ways to learn, solve problems and improve your development workflow."
  },
  {
    icon: ShieldCheck,
    title: "Verified Skills",
    description:
      "Build credibility by demonstrating your abilities through practical project contributions."
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Discover opportunities and connect with developers and organizations worldwide."
  }
];

function Features() {
  return (
    <section className="features section" id="features">
      <div className="section-heading">
        <span>OUR FEATURES</span>
        <h2>Everything You Need to <strong>Grow</strong></h2>
        <p>
          Powerful tools and opportunities to help developers
          learn, collaborate and build their careers.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon size={28} />
              </div>

              <span className="feature-number">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;

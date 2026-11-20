
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Create developer profile",
      "Explore public projects",
      "Join developer community",
      "Basic project showcase"
    ],
    unavailable: ["Advanced analytics", "Priority support"],
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious developers",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Unlimited project showcase",
      "Priority support",
      "AI-powered assistance"
    ],
    unavailable: [],
    popular: true
  },
  {
    name: "Team",
    price: "$49",
    description: "For growing development teams",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Private project spaces",
      "Advanced team analytics",
      "Dedicated support"
    ],
    unavailable: [],
    popular: false
  }
];

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section-heading">
        <span>SIMPLE PRICING</span>
        <h2>Choose Your <strong>Plan</strong></h2>
        <p>
          Flexible plans designed for developers
          at every stage of their journey.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <span className="popular-label">MOST POPULAR</span>
            )}

            <h3>{plan.name}</h3>
            <p>{plan.description}</p>

            <div className="price">
              {plan.price}
              <small>/month</small>
            </div>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}

              {plan.unavailable.map((feature) => (
                <li className="unavailable" key={feature}>
                  <X size={17} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="pricing-btn">
              Get Started
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;

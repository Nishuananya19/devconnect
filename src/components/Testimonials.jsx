
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    initials: "SJ",
    review:
      "DevConnect helped me collaborate with talented developers and improve my skills through real-world projects."
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    initials: "MC",
    review:
      "A great platform to showcase projects, connect with developers and discover exciting opportunities."
  },
  {
    name: "Emily Davis",
    role: "Software Engineer",
    initials: "ED",
    review:
      "The collaborative environment makes learning easier. I love being part of this developer community."
  }
];

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-heading">
        <span>COMMUNITY STORIES</span>
        <h2>What Developers <strong>Say</strong></h2>
        <p>
          Hear how our community is learning,
          collaborating and growing together.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <Quote className="quote-icon" size={30} />

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>

            <p>{item.review}</p>

            <div className="testimonial-user">
              <div className="user-avatar">
                {item.initials}
              </div>

              <div>
                <h4>{item.name}</h4>
                <small>{item.role}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

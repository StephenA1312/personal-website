const languages = ["Java", "Python", "Kotlin", "C", "C++"];

const technologies = [
  "Spring Boot",
  "Ruby on Rails",
  "Flask",
  "ASP.NET",
  "gRPC",
  "Elasticsearch",
  "Kibana",
  "Gradle",
];

const concepts = [
  "Distributed Systems",
  "Payment Reconciliation",
  "Operating Systems",
  "Virtual Memory",
  "API Design",
  "Database Normalization",
  "Agile Methodology",
  "Cloud Computing",
  "Machine Learning",
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Engineering Stack</h2>
        <span className="section-subtitle">
          Languages, frameworks, and systems concepts used in production.
        </span>
        <div className="skills-wrapper">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul className="skill-list">
                {languages.map((skill) => (
                  <li key={skill}>
                    <img
                      className="icon-colored"
                      src="images/checkmark.png"
                      alt="check"
                      width={24}
                      height={24}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <ul className="skill-list">
                {technologies.map((skill) => (
                  <li key={skill}>
                    <img
                      className="icon-colored"
                      src="images/checkmark.png"
                      alt="check"
                      width={24}
                      height={24}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skill-category">
              <h3>Core Concepts</h3>
              <ul className="skill-list">
                {concepts.map((skill) => (
                  <li key={skill}>
                    <img
                      className="icon-colored"
                      src="images/checkmark.png"
                      alt="check"
                      width={24}
                      height={24}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

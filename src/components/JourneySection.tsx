interface TimelineEntry {
  year: string;
  date: string;
  role: string;
  org: string;
  desc: string;
}

const entries: TimelineEntry[] = [
  {
    year: "'25",
    date: "July 2025 - Present",
    role: "Software Engineer 4, Payment Integration & Optimization",
    org: "Netflix",
    desc: "Built a mission-critical gRPC reconciliation service in Java 21 and Spring Boot to align processor activity with internal transactions and improve payment reliability.",
  },
  {
    year: "'23",
    date: "Dec 2023 - July 2025",
    role: "Software Engineer 3, Payments",
    org: "Netflix",
    desc: "Redesigned core payment workflows, removed legacy Elasticsearch dependencies, launched real-time operational controls, and migrated processor traffic into a modernized gateway architecture.",
  },
  {
    year: "'23",
    date: "May 2023 - Aug 2023",
    role: "Software Engineer Intern, Billing Platform",
    org: "Netflix",
    desc: "Developed internal Spring Boot APIs, indexed billing metadata, and built Kibana forecasting dashboards that improved on-call efficiency by 50%+.",
  },
  {
    year: "'22",
    date: "Aug 2022 - Dec 2022",
    role: "Software Engineer Intern",
    org: "Cisco Meraki",
    desc: "Built backend features and APIs in Ruby on Rails for real-time sensor ingestion, alert automation, and managed device operations.",
  },
  {
    year: "'23",
    date: "Dec 2023",
    role: "B.S. in Computer Science",
    org: "University of South Florida",
    desc: "Coursework included data structures and algorithms, computer architecture, database design, and linear algebra with computational applications.",
  },
];

export function JourneySection() {
  return (
    <section id="journey">
      <div className="container">
        <h2>Experience Snapshot</h2>
        <span className="section-subtitle">Career highlights and education milestones.</span>
        <div className="timeline-container">
          {entries.map((entry, i) => (
            <div className="timeline-row" key={i}>
              <div className="timeline-icon">{entry.year}</div>
              <div className="timeline-content">
                <p className="t-date">{entry.date}</p>
                <h3 className="t-role">{entry.role}</h3>
                <p className="t-org">{entry.org}</p>
                <p className="t-desc">{entry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

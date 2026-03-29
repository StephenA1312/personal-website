export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1 className="hero-title">Stephen Ali</h1>
          <p className="hero-desc">
            Stephen works at Netflix on the payments team.
          </p>
          <div className="hero-pills">
            <span>San Francisco, CA</span>
            <span>Java 21 / Spring Boot</span>
            <span>gRPC + Gradle</span>
          </div>
        </div>

        <div className="profile-img-wrapper">
          <img
            className="profile-img"
            src="images/profile-5782.jpg"
            alt="Stephen Ali profile photo"
            width={240}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

const email = 'me@stephen-ali.com';

export function ConnectSection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <section className="contact-section" id="connect">
        <div className="container">
          <h2>Let&apos;s Build</h2>
          <span className="section-subtitle">Open to impactful backend and payment systems work.</span>
          <div className="contact-box">
            <span className="contact-label">Email</span>
            <div className="email-display">
              <img
                className="email-icon-large icon-colored"
                src="images/email.png"
                alt="email icon"
                width={24}
                height={24}
              />
              <span className="email-text">{email}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="copy-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={handleCopy}
                aria-label="Copy email"
                role="button"
              >
                <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </div>
            <span className={`copy-msg${copied ? ' visible' : ''}`}>Copied!</span>

            <span className="contact-label">Profiles</span>
            <div className="social-links">
              <a
                className="social-btn"
                href="https://github.com/StephenA1312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-colored" src="images/github.png" alt="Github" width={24} height={24} />
                GitHub
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/ali-stephen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-colored" src="images/linkedin.png" alt="LinkedIn" width={24} height={24} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">Crafted by Stephen Ali</div>
      </footer>
    </>
  );
}

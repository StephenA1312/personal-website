export function WaveDivider() {
  return (
    <div className="separator-container" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

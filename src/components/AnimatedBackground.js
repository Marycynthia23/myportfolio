export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <span className="shape-wrapper" style={{ left: "8%", top: "12%", "--drift-duration": "70s", "--drift-delay": "-8s" }}>
        <span className="shape circle size-md color-orange" style={{ "--float-duration": "12s", "--float-delay": "-2s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "88%", top: "19%", "--drift-duration": "60s", "--drift-delay": "-20s", "--drift-x": "-60px" }}>
        <span className="shape square size-sm color-green" style={{ "--float-duration": "10s", "--float-delay": "-1s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "5%", top: "73%", "--drift-duration": "85s", "--drift-delay": "-18s", "--drift-x": "40px" }}>
        <span className="shape circle size-sm color-blue" style={{ "--float-duration": "11s", "--float-delay": "-3s" }} />
      </span>
    </div>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {/* Row 1 */}
      <span className="shape-wrapper" style={{ left: "8%", top: "12%", "--drift-duration": "70s", "--drift-delay": "-8s" }}>
        <span className="shape circle size-md color-orange" style={{ "--float-duration": "12s", "--float-delay": "-2s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "25%", top: "18%", "--drift-duration": "90s", "--drift-delay": "-12s", "--drift-x": "80px" }}>
        <span className="shape triangle size-lg color-blue" style={{ "--float-duration": "14s", "--float-delay": "-4s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "42%", top: "10%", "--drift-duration": "60s", "--drift-delay": "-20s", "--drift-x": "-60px" }}>
        <span className="shape square size-sm color-green" style={{ "--float-duration": "10s", "--float-delay": "-1s" }} />
      </span>

      {/* Row 2 */}
      <span className="shape-wrapper" style={{ left: "6%", top: "40%", "--drift-duration": "85s", "--drift-delay": "-18s", "--drift-x": "70px" }}>
        <span className="shape square size-lg color-pink" style={{ "--float-duration": "16s", "--float-delay": "-6s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "32%", top: "36%", "--drift-duration": "75s", "--drift-delay": "-28s" }}>
        <span className="shape circle size-sm color-blue" style={{ "--float-duration": "11s", "--float-delay": "-3s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "55%", top: "32%", "--drift-duration": "95s", "--drift-delay": "-24s", "--drift-x": "-90px" }}>
        <span className="shape triangle size-md color-orange" style={{ "--float-duration": "13s", "--float-delay": "-5s" }} />
      </span>

      {/* Row 3 */}
      <span className="shape-wrapper" style={{ left: "12%", top: "68%", "--drift-duration": "80s", "--drift-delay": "-16s" }}>
        <span className="shape triangle size-sm color-green" style={{ "--float-duration": "12s", "--float-delay": "-2s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "38%", top: "62%", "--drift-duration": "100s", "--drift-delay": "-5s" }}>
        <span className="shape square size-md color-blue" style={{ "--float-duration": "15s", "--float-delay": "-7s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "62%", top: "58%", "--drift-duration": "110s", "--drift-delay": "-22s", "--drift-x": "100px" }}>
        <span className="shape circle size-lg color-orange" style={{ "--float-duration": "18s", "--float-delay": "-9s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "78%", top: "70%", "--drift-duration": "80s", "--drift-delay": "-10s", "--drift-x": "-70px" }}>
        <span className="shape triangle size-sm color-pink" style={{ "--float-duration": "12s", "--float-delay": "-3s" }} />
      </span>

      {/* Row 4 */}
      <span className="shape-wrapper" style={{ left: "75%", top: "24%", "--drift-duration": "65s", "--drift-delay": "-14s" }}>
        <span className="shape circle size-sm color-green" style={{ "--float-duration": "11s", "--float-delay": "-1s" }} />
      </span>
      <span className="shape-wrapper" style={{ left: "85%", top: "38%", "--drift-duration": "90s", "--drift-delay": "-26s" }}>
        <span className="shape square size-md color-orange" style={{ "--float-duration": "14s", "--float-delay": "-6s" }} />
      </span>
    </div>
  );
}


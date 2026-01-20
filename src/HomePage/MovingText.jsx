import React from "react";
import "./MovingText.css";


export default function MovingText({
  messages = [
    "Built on Experience",
    "Process-Driven Approach",
    "Focused on Long-Term Trust",
  ],
  speed = 24,
}) {
  const sequence = [];

  messages.forEach((m, i) => {
    sequence.push({ type: "text", value: m });
    sequence.push({ type: "diamond", key: `diamond-${i}` });
  });

  const duplicated = [...sequence, ...sequence];

  return (
    <div className="marquee-wrap" aria-hidden="false">
      <div
        className="marquee"
        style={{ "--marquee-duration": `${speed}s` }}
        tabIndex={0}
        role="region"
        aria-label="Scrolling announcements"
      >
        <div className="marquee-track">
          {duplicated.map((item, idx) =>
            item.type === "text" ? (
              <span key={`t-${idx}`} className="marquee-item">
                {item.value}
              </span>
            ) : (
              <span
                key={`d-${idx}`}
                className="marquee-diamond"
                aria-hidden="true"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

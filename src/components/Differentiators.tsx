import differentiatorsImg from "../../Assests/Differentiators.webp";
import "../styles/differentiators.css";

const VALUE_POINTS = [
  {
    title: "Trusted In-Room Case Support",
    text: "Consistent OR presence and execution discipline from pre-case planning through in-room support and follow-through.",
  },
  {
    title: "Reliability Under Surgical Demands",
    text: "A dependable operating model built on accountability, standardized protocols, and readiness across every territory.",
  },
  {
    title: "Urgency With Clinical Precision",
    text: "Responsive field execution that protects surgical workflow while maintaining quality, speed, and clinical confidence.",
  },
] as const;

export default function Differentiators() {
  return (
    <section className="df" id="differentiators" aria-labelledby="df-heading">
      <div className="df__inner">
        <div className="df__layout">
          <div className="df__mediaWrap">
            <img className="df__image" src={differentiatorsImg} alt="" loading="lazy" decoding="async" />
          </div>

          <div className="df__content">
            <p className="df__eyebrow">Why Choose Us</p>
            <h2 id="df-heading" className="df__title">
              Execution quality you can trust in every case
            </h2>
            <p className="df__intro">
              We operate as a focused foot and ankle distribution partner across the Southeast, built for reliable
              case execution, urgent response, and long-term manufacturer growth.
            </p>

            <ul className="df__points" aria-label="Differentiators">
              {VALUE_POINTS.map((point) => (
                <li key={point.title} className="df__point">
                  <h3 className="df__pointTitle">{point.title}</h3>
                  <p className="df__pointText">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


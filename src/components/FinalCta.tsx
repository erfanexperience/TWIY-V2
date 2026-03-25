import { Link } from "react-router-dom";
import "../styles/final-cta.css";

export default function FinalCta() {
  return (
    <section className="fcta" id="final-cta" aria-labelledby="fcta-heading">
      <div className="fcta__inner">
        <p className="fcta__eyebrow">Ready to scale with confidence</p>
        <h2 id="fcta-heading" className="fcta__title">
          Partner with the Southeast&apos;s focused foot &amp; ankle distribution team
        </h2>
        <p className="fcta__text">
          Built for operational precision, urgent execution, and measurable growth for surgeons and manufacturers.
        </p>
        <Link className="fcta__button" to="/consultation-booking">
          Schedule a Strategic Consultation
        </Link>
      </div>
    </section>
  );
}


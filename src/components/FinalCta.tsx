import { Link } from "react-router-dom";
import { publicBusinessInfo } from "../config/publicBusinessInfo";
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

        <div className="fcta__contact">
          <a href={`tel:${publicBusinessInfo.phoneE164}`} className="fcta__phone">
            {publicBusinessInfo.phoneDisplay}
          </a>
          <p className="fcta__smsDisclosure">
            By texting or calling this number, you consent to receive transactional SMS messages from TWIY Health
            related to your intake request. Message frequency varies. Message and data rates may apply. Reply STOP to
            cancel, HELP for help. Consent is not a condition of any purchase.{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>{" | "}
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import logoUrl from "../../Assests/logo.png";
import SiteFooter from "./SiteFooter";
import "../styles/consultation-booking.css";

export default function ConsultationBookingPage() {
  return (
    <>
      <section className="cb" aria-labelledby="cb-heading">
        <header className="cb__header">
          <Link className="cb__logoWrap" to="/">
            <img className="cb__logo" src={logoUrl} alt="TWIY Health" />
          </Link>
          <Link className="cb__back" to="/">
            Back to Home
          </Link>
        </header>

        <div className="cb__inner">
          <div className="cb__intro">
            <p className="cb__eyebrow">Consultation Booking</p>
            <h1 id="cb-heading" className="cb__title">
              Book a strategic consultation with our surgical distribution team
            </h1>
            <p className="cb__text">
              Share your case support goals, territory priorities, or manufacturer partnership needs. Our team will
              follow up with a tailored plan and next-step recommendations.
            </p>
            <ul className="cb__points">
              <li>Trusted in-room case support and execution quality</li>
              <li>Fast response for urgent scheduling and coverage needs</li>
              <li>Structured growth planning across the Southeast</li>
            </ul>
          </div>

          <form className="cb__form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="cb__formTitle">Request Consultation</h2>

            <label className="cb__field">
              <span>Full Name</span>
              <input type="text" name="fullName" placeholder="Your full name" required />
            </label>

            <label className="cb__field">
              <span>Work Email</span>
              <input type="email" name="email" placeholder="name@company.com" required />
            </label>

            <label className="cb__field">
              <span>Phone Number</span>
              <input type="tel" name="phone" placeholder="+1 (___) ___-____" required />
            </label>

            <label className="cb__field">
              <span>Organization / Facility</span>
              <input type="text" name="facility" placeholder="Hospital, ASC, or Manufacturer" />
            </label>

            <label className="cb__field">
              <span>Consultation Focus</span>
              <select name="focus" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="case-coverage">Surgical Case Coverage</option>
                <option value="biologics-fixation">Biologics &amp; Fixation Solutions</option>
                <option value="inventory-logistics">Inventory &amp; Logistics Management</option>
                <option value="partnership-growth">Manufacturer Partnership &amp; Growth</option>
              </select>
            </label>

            <label className="cb__field cb__field--full">
              <span>Notes</span>
              <textarea
                name="notes"
                rows={5}
                placeholder="Share your goals, timeline, territory needs, and any case support details..."
              />
            </label>

            <button className="cb__submit" type="submit">
              Submit Consultation Request
            </button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}


import { Link } from "react-router-dom";
import logoUrl from "../../Assests/logo.png";
import SiteFooter from "./SiteFooter";
import "../styles/about-us.css";

export default function AboutUsPage() {
  return (
    <>
      <section className="au" aria-labelledby="au-heading">
        <header className="au__header">
          <Link className="au__logoWrap" to="/">
            <img className="au__logo" src={logoUrl} alt="TWIY Health" />
          </Link>
          <div className="au__actions">
            <Link className="au__link" to="/consultation-booking">
              Book Consultation
            </Link>
            <Link className="au__link au__link--ghost" to="/">
              Back Home
            </Link>
          </div>
        </header>

        <div className="au__inner">
          <p className="au__eyebrow">About Us</p>
          <h1 id="au-heading" className="au__title">
            A focused foot &amp; ankle distribution partner built for measurable growth
          </h1>
          <p className="au__lead">
            TWIY Health is a specialized surgical distribution firm serving the Southeast with precision, urgency, and
            execution quality. We align surgeons, facilities, and manufacturer partners through a disciplined operating
            model that scales without compromising in-room support.
          </p>

          <div className="au__grid">
            <article className="au__card">
              <h2 className="au__cardTitle">Mission</h2>
              <p className="au__cardText">
                Deliver advanced surgical technologies with integrity and reliability, empowering foot and ankle teams
                to achieve exceptional patient outcomes.
              </p>
            </article>
            <article className="au__card">
              <h2 className="au__cardTitle">Vision</h2>
              <p className="au__cardText">
                Become the dominant foot and ankle distribution partner across the Southeast through operational
                excellence, surgeon loyalty, and consistent growth.
              </p>
            </article>
            <article className="au__card">
              <h2 className="au__cardTitle">How We Operate</h2>
              <p className="au__cardText">
                From pre-case planning and logistics coordination to in-room execution and post-case follow-through, we
                maintain a premium standard of support and accountability.
              </p>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}


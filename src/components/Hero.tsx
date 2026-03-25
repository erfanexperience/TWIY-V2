import { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../Assests/logo.png";
import leftMediaUrl from "../../Assests/Left.webp";
import centerMediaUrl from "../../Assests/Center.webp";
import rightMediaUrl from "../../Assests/Right.webp";

const NAV_LINKS = [
  { label: "Services", type: "anchor", href: "#core-services" },
  { label: "About Us", type: "route", to: "/about-us" },
] as const;

function BookButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Link className={`twi-button twi-button--outline ${className}`.trim()} to="/consultation-booking">
      {label}
    </Link>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="twi-hero">
      <header className="twi-header">
        <div className="twi-header__left">
          <img className="twi-logo" alt="TWIY Health" src={logoUrl} />
        </div>

        <nav className="twi-nav twi-nav--desktop" aria-label="Primary navigation">
          {NAV_LINKS.map((item) =>
            item.type === "anchor" ? (
              <a key={item.label} className="twi-nav__link" href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} className="twi-nav__link" to={item.to}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="twi-header__right twi-header__right--desktop">
          <Link className="twi-button twi-button--solid" to="/consultation-booking">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="twi-menuToggle"
          aria-expanded={menuOpen}
          aria-controls="twi-mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`twi-menuToggle__icon ${menuOpen ? "twi-menuToggle__icon--open" : ""}`} />
        </button>
      </header>

      <div
        id="twi-mobile-nav"
        className={`twi-mobileNav ${menuOpen ? "twi-mobileNav--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="twi-mobileNav__inner" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) =>
            item.type === "anchor" ? (
              <a key={item.label} className="twi-mobileNav__link" href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} className="twi-mobileNav__link" to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <Link className="twi-button twi-button--solid twi-mobileNav__cta" to="/consultation-booking">
            Book Consultation
          </Link>
        </nav>
      </div>

      <section className="twi-intro" aria-label="Hero intro">
        <h1 className="twi-heading">
          THE REGIONAL LEADER IN
          <br />
          FOOT &amp; ANKLE SURGICAL
          <br />
          DISTRIBUTION
        </h1>

        <div className="twi-intro__right">
          <div className="twi-kicker">DRIVING SURGICAL GROWTH ACROSS THE SOUTHEAST.</div>
          <p className="twi-paragraph">
            Delivering advanced biologics and fixation technologies across the Southeast with precision, reliability,
            and unmatched case support.
          </p>
        </div>
      </section>

      <section className="twi-three" aria-label="Three column content">
        <article className="twi-card twi-card--left">
          <div className="twi-card__text">
            <h2 className="twi-card__title">BIOLOGICS &amp; FIXATION SOLUTIONS</h2>
            <p className="twi-card__subtext">
              Representing leading technologies from Medline, OSSIO, BoneSupport, Acera Surgical, and Biopoly—supporting
              optimal surgical outcomes and long-term stability.
            </p>
          </div>
          <img className="twi-card__media twi-card__media--contain" alt="" src={leftMediaUrl} />
        </article>

        <article className="twi-card twi-card--center">
          <img className="twi-card__media twi-card__media--cover" alt="" src={centerMediaUrl} />
          <div className="twi-centerTint" aria-hidden />
          <div className="twi-centerOverlay">
            <div className="twi-centerOverlay__title">COMPREHENSIVE SURGICAL SUPPORT</div>
            <p className="twi-centerOverlay__body">
              From pre-case planning and logistics coordination to in-room execution and post-case follow-through—focused
              exclusively on foot and ankle solutions throughout the Southeast.
            </p>
            <BookButton label="Book Consultation" />
          </div>
        </article>

        <article className="twi-card twi-card--right">
          <div className="twi-card__text">
            <h2 className="twi-card__title">SURGICAL CASE COVERAGE</h2>
            <p className="twi-card__subtext">
              Empowering foot and ankle surgeons with the products, support, and reliability required for exceptional
              patient outcomes—with precision, urgency, and integrity.
            </p>
          </div>
          <img className="twi-card__media twi-card__media--contain" alt="" src={rightMediaUrl} />
        </article>
      </section>
    </div>
  );
}

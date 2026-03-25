import { Link } from "react-router-dom";
import logoUrl from "../../Assests/logo.png";
import { mailingAddressLines, publicBusinessInfo } from "../config/publicBusinessInfo";
import "../styles/site-footer.css";

const NAV_LINKS = [
  { label: "Services", href: "/#core-services" },
  { label: "About Us", href: "/about-us" },
  { label: "Book Consultation", href: "/consultation-booking" },
] as const;

export default function SiteFooter() {
  const addressOneLine = mailingAddressLines().join(", ");

  return (
    <footer className="sf" aria-labelledby="sf-heading">
      <div className="sf__inner">
        <h2 id="sf-heading" className="sf__srOnly">
          Site footer
        </h2>

        <div className="sf__top">
          <div className="sf__brand">
            <Link className="sf__logoLink" to="/">
              <img src={logoUrl} alt="TWIY Health" className="sf__logo" loading="lazy" decoding="async" />
            </Link>
            <p className="sf__tagline">Driving surgical growth across the Southeast.</p>
          </div>

          <nav className="sf__nav" aria-label="Footer navigation">
            <h3 className="sf__heading">Navigation</h3>
            <ul className="sf__list">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link className="sf__link" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="sf__contact" aria-label="Contact">
            <h3 className="sf__heading">Contact</h3>
            <ul className="sf__list">
              <li>
                <a href={`mailto:${publicBusinessInfo.email}`} className="sf__link">
                  {publicBusinessInfo.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${publicBusinessInfo.infoEmail}`} className="sf__link">
                  {publicBusinessInfo.infoEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${publicBusinessInfo.phoneE164}`} className="sf__link">
                  {publicBusinessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`sms:${publicBusinessInfo.messagingNumberE164}`} className="sf__link">
                  SMS / intake: {publicBusinessInfo.messagingNumberDisplay}
                </a>
              </li>
              <li className="sf__plainText">{addressOneLine}</li>
            </ul>
          </section>
        </div>

        <div className="sf__bottom">
          <p className="sf__copyright">© {new Date().getFullYear()} TWIY Health. All rights reserved.</p>
          <div className="sf__legal">
            <Link className="sf__link" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="sf__link" to="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

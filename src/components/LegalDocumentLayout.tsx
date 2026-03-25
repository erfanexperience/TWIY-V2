import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../Assests/logo.png";
import SiteFooter from "./SiteFooter";
import "../styles/legal-pages.css";

type LegalDocumentLayoutProps = {
  title: string;
  effectiveLabel: string;
  children: ReactNode;
};

export default function LegalDocumentLayout({ title, effectiveLabel, children }: LegalDocumentLayoutProps) {
  return (
    <>
      <div className="lp">
        <header className="lp__header">
          <Link className="lp__logoWrap" to="/">
            <img className="lp__logo" src={logoUrl} alt="TWIY Health" />
          </Link>
          <div className="lp__actions">
            <Link className="lp__btn lp__btn--solid" to="/consultation-booking">
              Book Consultation
            </Link>
            <Link className="lp__btn lp__btn--ghost" to="/">
              Home
            </Link>
          </div>
        </header>

        <main className="lp__main">
          <div className="lp__inner">
            <p className="lp__eyebrow">TWIY Health</p>
            <h1 className="lp__title">{title}</h1>
            <p className="lp__effective">{effectiveLabel}</p>
            <div className="lp__prose">{children}</div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

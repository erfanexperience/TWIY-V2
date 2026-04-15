import { Link } from "react-router-dom";
import LegalDocumentLayout from "./LegalDocumentLayout";
import MailingAddressBlock from "./MailingAddressBlock";
import { publicBusinessInfo, publicSiteUrl } from "../config/publicBusinessInfo";

export default function TermsConditionsPage() {
  const { email, phoneDisplay, phoneE164, messagingNumberDisplay, messagingNumberE164 } = publicBusinessInfo;
  const site = publicSiteUrl();
  const privacyUrl = `${site}/privacy-policy`;
  const termsUrl = `${site}/terms-and-conditions`;

  return (
    <LegalDocumentLayout
      title="Terms &amp; Conditions"
      effectiveLabel="Effective date: April 8, 2026 · Last updated: April 8, 2026 · These Terms also serve as our Terms of Service where that label is required by carriers or platforms (including A2P 10DLC)."
    >
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the public website operated by{" "}
        <strong>{publicBusinessInfo.legalName}</strong> (&ldquo;TWIY,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), and your communications with us
        &mdash; including phone and SMS to the intake number published on this site. By contacting us or using this site, you
        agree to these Terms and our <Link to="/privacy-policy">Privacy Policy</Link>. If you do not agree, do not use
        this site or our messaging channels.
      </p>

      <div className="lp__callout">
        <strong>Public verification (A2P 10DLC):</strong> These Terms are published at{" "}
        <a href={termsUrl}>{termsUrl}</a>. Our Privacy Policy is at <a href={privacyUrl}>{privacyUrl}</a>. Together they
        document how users opt in to SMS, message frequency, rates, opt-out and help, and program scope for carrier
        review.
      </div>

      <h2>1. What TWIY does</h2>
      <p>
        TWIY Health provides surgical distribution&ndash;related services in the United States, including partnership,
        territory, and operational coordination with healthcare professionals and manufacturers. We summarize our focus
        on the <Link to="/">homepage</Link> and <Link to="/about-us">About</Link> pages. We may provide intake,
        scheduling, or follow-up coordination by phone, email, or SMS when you request it.
      </p>
      <p>
        TWIY is <strong>not</strong> a clinic or hospital and <strong>does not</strong> provide medical diagnosis,
        treatment, emergency services, or legal advice. Information we share is for business coordination unless
        separately governed by a written agreement between you and TWIY. In a medical emergency, call 911 (or your local
        emergency number).
      </p>

      <h2>2. Eligibility and acceptable use</h2>
      <p>
        This site and our communication lines are intended for adults engaging in good-faith business discussions. You
        agree not to misuse the site or SMS/phone channels &mdash; including by transmitting unlawful, harassing, fraudulent,
        or malicious content, attempting unauthorized access to our systems, or impersonating another party.
      </p>

      <h2>3. SMS program terms (A2P 10DLC)</h2>
      <p>
        The following applies to SMS messages sent by <strong>{publicBusinessInfo.legalName}</strong> in connection
        with inquiries or coordination <strong>you</strong> initiate. Our published intake number for calls and texts
        is <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a> /{" "}
        <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> &mdash; it must match the number on your Twilio /
        carrier registration.
      </p>

      <h3>3.1 Message flow / call to action (summary for registration)</h3>

      <div className="lp__smsBox">
        <h4>Call to Action &amp; Opt-In Summary &mdash; A2P 10DLC Carrier Review</h4>
        <ul>
          <li>
            <strong>Brand:</strong> {publicBusinessInfo.legalName}
          </li>
          <li>
            <strong>Intake number:</strong>{" "}
            <a href={"tel:" + phoneE164}>{phoneDisplay}</a> (calls) /{" "}
            <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> (SMS)
          </li>
          <li>
            <strong>CTA / Opt-in method #1 &mdash; Text-in:</strong> Text us at{" "}
            <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> from your mobile phone &mdash; any first
            message or a keyword such as <strong>START</strong> constitutes your request for us to respond by SMS about
            your inquiry.
          </li>
          <li>
            <strong>CTA / Opt-in method #2 &mdash; Call-in:</strong> Call us at{" "}
            <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a>; if you agree during the call to receive
            text messages for scheduling or coordination, that is your consent for SMS for that purpose.
          </li>
          <li>
            <strong>Website browsing:</strong> Browsing this website alone does not enroll you in SMS.
          </li>
          <li>
            <strong>Consent is not a condition of purchase</strong> of any good or service.
          </li>
          <li>
            <strong>Message types:</strong> Transactional/relationship messages related to your request (for example
            confirmations, clarifications, scheduling updates).
          </li>
          <li>
            <strong>Frequency:</strong> Varies with your conversation; not a fixed recurring marketing schedule.
          </li>
          <li><strong>Message and data rates may apply.</strong></li>
          <li>
            <strong>Opt-out:</strong> Reply <strong>STOP</strong> at any time to cancel SMS from this number.
          </li>
          <li>
            <strong>Help:</strong> Reply <strong>HELP</strong> for help or contact us at{" "}
            <a href={"mailto:" + email}>{email}</a>.
          </li>
          <li>
            <strong>Carriers are not liable</strong> for delayed or undelivered messages.
          </li>
          <li>
            <strong>Policies:</strong>{" "}
            <a href={privacyUrl}>Privacy Policy</a>{" | "}
            <a href={termsUrl}>Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>

      <h3>3.2 Consent &mdash; detailed</h3>
      <p>
        You consent to receive SMS from us when you <strong>affirmatively initiate contact</strong> using the published
        number: by texting (including &ldquo;START&rdquo; or any ordinary first message) or by calling and agreeing to SMS where
        offered. Browsing the website alone does not enroll you.{" "}
        <strong>Consent is not a condition of purchase</strong> of any good or service where that distinction applies
        under applicable law.
      </p>

      <h3>3.3 Use of mobile information</h3>
      <p>
        <strong>Mobile opt-in and consent-related information</strong> are not sold or shared with third parties for
        their marketing. We use phone numbers and message content to operate this program and our business, subject to
        our <a href={privacyUrl}>Privacy Policy</a> and lawful disclosures.
      </p>

      <h3>3.4 Message scope | No unrelated marketing</h3>
      <p>
        Messages are <strong>transactional and relationship</strong> in nature &mdash; for example intake acknowledgments,
        clarifications, scheduling or coordination updates tied to your request. We do not send unrelated promotional SMS
        blasts to numbers collected through this intake flow.
      </p>

      <h3>3.5 Frequency, rates, carrier disclaimer</h3>
      <p>
        <strong>Message frequency varies</strong> with your interaction and the status of your request; this is not a
        recurring subscription marketing program with a fixed cadence. <strong>Message and data rates may apply.</strong>{" "}
        <strong>Carriers are not liable</strong> for delayed or undelivered messages.
      </p>

      <h3>3.6 Opt-out, help, and human support</h3>
      <p>
        Reply <strong>STOP</strong> to cancel SMS from this number/program. Reply <strong>HELP</strong> for help. You
        may also contact us using the information in Section 10 below. We will process opt-out and help requests as
        required by applicable rules.
      </p>

      <h3>3.7 Alignment with message content</h3>
      <p>
        Your live message samples and autoresponders should remain consistent with this section &mdash; including brand name,
        variable frequency, rates disclosure, STOP/HELP, and references to these Terms and the Privacy Policy.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Content on this site (text, branding, layout, graphics) is owned by TWIY or its licensors and is protected by
        applicable intellectual property laws. You may not copy, scrape, or reuse it for commercial purposes without our
        prior written permission, except as allowed by law.
      </p>

      <h2>5. Disclaimer of warranties</h2>
      <p>
        This site and our communications are provided <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available.&rdquo;</strong> To
        the fullest extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant uninterrupted or error-free transmission of SMS or email.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, TWIY and its officers, employees, contractors, and affiliates
        will not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits
        or data, arising from your use of the site, SMS, or phone services &mdash; including delays or failures caused by
        carriers or third-party platforms.
      </p>
      <p>
        Our <strong>aggregate liability</strong> for any claim arising from these Terms or related services is limited
        to the greater of (a) one hundred U.S. dollars (US $100) or (b) amounts you paid TWIY for the specific services
        giving rise to the claim in the twelve (12) months before the claim, if any.
      </p>

      <h2>7. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless TWIY from claims, losses, and expenses (including reasonable attorneys&apos;
        fees) arising from your violation of these Terms, misuse of our communications, or violation of others&apos; rights &mdash;
        except to the extent caused by our willful misconduct.
      </p>

      <h2>8. Governing law and venue</h2>
      <p>
        These Terms are governed by the laws of the <strong>United States</strong> and the State of{" "}
        <strong>Florida</strong>, without regard to conflict-of-law rules that would apply another jurisdiction&apos;s law.
        You agree that courts in Florida, USA, have exclusive jurisdiction over disputes arising from these Terms or
        your use of our services, and you consent to personal jurisdiction there, subject to any non-waivable rights you
        may have under consumer protection laws in your home jurisdiction.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may modify these Terms at any time by posting an updated version on this site and updating the &ldquo;Last
        updated&rdquo; date. Material changes may require additional notice where required by law. Your continued use after
        updates constitutes acceptance unless law requires express consent.
      </p>

      <h2>10. Contact</h2>
      <p>For questions about these Terms or the SMS program:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href={"mailto:" + email}>{email}</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href={"tel:" + phoneE164}>{phoneDisplay}</a>
        </li>
        <li>
          <strong>Intake / SMS:</strong> <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a>
        </li>
      </ul>
      <p>
        <strong>Business mailing address:</strong>
      </p>
      <MailingAddressBlock />
    </LegalDocumentLayout>
  );
}

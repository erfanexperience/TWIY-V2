import { Link } from "react-router-dom";
import LegalDocumentLayout from "./LegalDocumentLayout";
import MailingAddressBlock from "./MailingAddressBlock";
import { publicBusinessInfo, publicSiteUrl } from "../config/publicBusinessInfo";

export default function PrivacyPolicyPage() {
  const { email, phoneDisplay, phoneE164, messagingNumberDisplay, messagingNumberE164 } = publicBusinessInfo;
  const site = publicSiteUrl();
  const privacyUrl = `${site}/privacy-policy`;
  const termsUrl = `${site}/terms-and-conditions`;

  return (
    <LegalDocumentLayout title="Privacy Policy" effectiveLabel="Effective date: April 8, 2026 · Last updated: April 8, 2026">
      <p>
        This Privacy Policy explains how <strong>{publicBusinessInfo.legalName}</strong> (&ldquo;TWIY,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, discloses, and safeguards information when you interact with our company &mdash; including
        when you visit this website, request information, book a consultation, or contact us by phone or SMS. TWIY is
        a U.S.-based business focused on surgical distribution partnerships and related coordination; we describe our
        typical operations on our <Link to="/">homepage</Link> and <Link to="/about-us">About</Link> pages.
      </p>

      <div className="lp__callout">
        <strong>Public verification (A2P 10DLC):</strong> This Policy is published at{" "}
        <a href={privacyUrl}>{privacyUrl}</a>. Our Terms of Service (including SMS terms) are at{" "}
        <a href={termsUrl}>{termsUrl}</a>. Carrier and Twilio reviewers may use these URLs to verify our call to action,
        consent methods, and required disclosures.
      </div>

      <div className="lp__callout">
        <strong>SMS program (A2P 10DLC &mdash; brand and program identification):</strong>{" "}
        <strong>{publicBusinessInfo.legalName}</strong> operates a <strong>business intake and coordination</strong>{" "}
        messaging program. Messages are sent only in connection with inquiries or coordination you start with us. The
        published number for calls and texts is{" "}
        <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> /{" "}
        <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a> (this number must match your registered
        campaign). We do not use this program for unrelated promotional or blast marketing.
      </div>

      <h2>1. Information we collect</h2>
      <p>Depending on how you choose to interact with us, we may collect:</p>
      <ul>
        <li>
          <strong>Identifiers and contact details</strong> &mdash; such as your name, organization, work email, phone
          number, and similar information you submit through forms or messages.
        </li>
        <li>
          <strong>Professional and operational details</strong> &mdash; information you share about territories, case support
          needs, scheduling, manufacturer partnerships, or other business topics relevant to distribution or intake
          coordination.
        </li>
        <li>
          <strong>Communications content</strong> &mdash; the content of emails, SMS, phone notes (where permitted), and other
          messages you send us when you initiate contact or respond to our replies.
        </li>
        <li>
          <strong>Technical data</strong> &mdash; basic device and log information commonly collected by websites (such as
          browser type, general geographic region derived from IP address, and pages visited) to operate and secure our
          site.
        </li>
      </ul>
      <p>We collect sensitive categories of information only where you choose to provide them and where lawful.</p>

      <h2>2. How we use information</h2>
      <p>We use information to operate our business and serve requests you initiate, including to:</p>
      <ul>
        <li>Respond to inquiries, consultation requests, and intake-related communications.</li>
        <li>Coordinate logistics, follow-ups, clarifications, and transactional updates tied to an active request.</li>
        <li>Operate, maintain, and improve our website and internal processes; detect fraud or abuse.</li>
        <li>Comply with law, regulation, court orders, or enforceable governmental requests.</li>
      </ul>
      <p>
        <strong>No marketing SMS.</strong> We do not send promotional or advertising SMS campaigns to numbers
        collected through our intake line. SMS are limited to transactional or relationship messages directly tied to a
        request you started with us (for example, confirmations, scheduling clarifications, or status updates).
      </p>

      <h2>3. SMS program: message flow, consent, and your choices</h2>

      <div className="lp__smsBox">
        <h4>SMS Program &mdash; A2P 10DLC Quick-Reference (Carrier &amp; Twilio Review)</h4>
        <ul>
          <li><strong>a) Brand / legal name:</strong> TWIY Health</li>
          <li>
            <strong>b) Program purpose:</strong> Transactional and relationship SMS tied to healthcare case intake
            coordination; no marketing or promotional messages.
          </li>
          <li>
            <strong>c) Published intake number:</strong>{" "}
            <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a> /{" "}
            <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> (SMS)
          </li>
          <li>
            <strong>d) Opt-in method #1 &mdash; Text-in:</strong> You consent by sending any text message (including START
            or any natural first message) to{" "}
            <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a> from your mobile phone.
          </li>
          <li>
            <strong>e) Opt-in method #2 &mdash; Call-in:</strong> You consent by calling{" "}
            <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a> and agreeing during the call to receive
            SMS for scheduling or coordination.
          </li>
          <li><strong>f) Website browsing:</strong> Browsing this website alone does not enroll you in SMS.</li>
          <li>
            <strong>g) Message frequency:</strong> Varies based on your request; not a fixed recurring schedule.
          </li>
          <li><strong>h) Rates:</strong> Message and data rates may apply.</li>
          <li><strong>i) Opt-out:</strong> Reply STOP at any time to cancel SMS from this number.</li>
          <li>
            <strong>j) Help:</strong> Reply HELP for assistance or contact us at{" "}
            <a href={"mailto:" + email}>{email}</a>.
          </li>
          <li><strong>k) No purchase required:</strong> Consent is not a condition of purchasing any goods or services.</li>
          <li><strong>l) Carrier disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
          <li>
            <strong>m) Policies:</strong>{" "}
            <a href={privacyUrl}>{privacyUrl}</a>{" | "}
            <a href={termsUrl}>{termsUrl}</a>
          </li>
        </ul>
      </div>

      <p>
        This section is written so carriers, Twilio, and other reviewers can verify our{" "}
        <strong>call to action</strong>, <strong>how users opt in</strong>, and <strong>required disclosures</strong>{" "}
        for A2P 10DLC registration. You may copy language from this section into your &ldquo;Message Flow / Call to Action&rdquo;
        field if it accurately reflects your live process.
      </p>

      <h3>3.1 Brand identification</h3>
      <p>
        <strong>Brand / legal name:</strong> {publicBusinessInfo.legalName}. <strong>Program purpose:</strong>{" "}
        Transactional and relationship SMS tied to business intake, consultation coordination, and follow-up you request
        with us &mdash; not mass marketing.
      </p>

      <h3>3.2 Public call to action &mdash; how you opt in (all methods we use)</h3>
      <p>
        You are <strong>not</strong> enrolled in SMS by browsing this website alone. Consent is collected only through
        affirmative, user-initiated contact with our published number or channel, as follows:
      </p>
      <ul>
        <li>
          <strong>Text-in (mobile originated):</strong> You send a text message from your mobile phone to{" "}
          <a href={"sms:" + messagingNumberE164}>{messagingNumberDisplay}</a>. That includes any natural first message
          (for example introducing yourself or your request) or a keyword such as <strong>START</strong> if you choose to
          use one. Sending that message means you are asking {publicBusinessInfo.legalName} to reply by SMS about your
          inquiry.
        </li>
        <li>
          <strong>Call-in:</strong> You call{" "}
          <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a>. If,
          during the call, you agree to receive SMS (for example to confirm details, schedule, or continue the
          conversation by text), that agreement is your consent for SMS for that coordination thread.
        </li>
        <li>
          <strong>Website context:</strong> The same number appears on our public website (for example footer and
          contact-related areas). Before you text or call, you can read this Privacy Policy at{" "}
          <a href={privacyUrl}>{privacyUrl}</a> and our Terms at <a href={termsUrl}>{termsUrl}</a>.
        </li>
      </ul>
      <p>
        <strong>Consent is not a condition of purchase</strong> of any good or service where applicable law draws that
        distinction. If we add another opt-in method (for example a checked box on a web form that explicitly consents
        to SMS and lists the program), we will update this Policy and our Terms so all methods remain publicly
        documented.
      </p>

      <h3>3.3 What we send and message frequency</h3>
      <p>
        <strong>Message types:</strong> SMS may include intake acknowledgments, confirmations, clarifications,
        scheduling or logistics coordination, status updates, and other operational content directly related to a request
        or conversation <strong>you</strong> started with us.
      </p>
      <p>
        <strong>Frequency:</strong> This is a <strong>conversational / transactional</strong> program, not a recurring
        subscription marketing campaign. <strong>Message frequency varies</strong> based on your needs and the status of
        your request; there is no fixed daily or weekly schedule.
      </p>

      <h3>3.4 Required disclosures: rates, opt-out, help, and policies</h3>
      <ul>
        <li>
          <strong>Message and data rates may apply.</strong> Check your carrier plan.
        </li>
        <li>
          <strong>Opt-out:</strong> Reply <strong>STOP</strong> at any time to cancel SMS from this number/program. We
          will honor opt-out requests as required by applicable rules (subject to narrow exceptions such as legally
          required or security-related messages, if any).
        </li>
        <li>
          <strong>Help:</strong> Reply <strong>HELP</strong> for assistance, or contact us using the &ldquo;Contact us&rdquo;
          section below.
        </li>
        <li>
          <strong>Privacy Policy:</strong> <a href={privacyUrl}>{privacyUrl}</a>
        </li>
        <li>
          <strong>Terms &amp; Conditions (Terms of Service):</strong> <a href={termsUrl}>{termsUrl}</a>
        </li>
      </ul>

      <h3>3.5 Example first reply (for alignment with message samples)</h3>
      <p>
        To keep our registration and live messaging aligned, an initial automated or manual reply may include elements
        such as: brand name ({publicBusinessInfo.legalName}), that message frequency varies, that message and data
        rates may apply, how to opt out (<strong>STOP</strong>), how to get help (<strong>HELP</strong> or our contact
        information), and links or short references to our Terms and Privacy Policy. Exact wording may vary slightly
        as long as these points remain clear.
      </p>

      <h3>3.6 Carriers and delivery partners</h3>
      <p>
        SMS may be delivered through telecommunications carriers and messaging platforms (such as Twilio).{" "}
        <strong>Carriers are not liable</strong> for delayed or undelivered messages. Delivery depends on your device,
        carrier coverage, and network conditions.
      </p>

      <h2>4. Disclosures to third parties</h2>
      <p>
        We do <strong>not</strong> sell personal information. We do <strong>not</strong> sell or share mobile numbers
        or SMS opt-in data for third-party marketing or promotional purposes.
      </p>
      <p>We may disclose information to:</p>
      <ul>
        <li>
          <strong>Service providers</strong> &mdash; such as hosting, communications (including telephony/SMS carriers and
          platforms like Twilio), email, analytics, and CRM tools that process data under contract for us.
        </li>
        <li>
          <strong>Legal and safety</strong> &mdash; when we believe disclosure is required by law or necessary to protect
          rights, safety, or security.
        </li>
        <li>
          <strong>Business transfers</strong> &mdash; in connection with a merger, acquisition, or asset sale, subject to
          appropriate safeguards.
        </li>
      </ul>

      <h2>5. Retention and security</h2>
      <p>
        We retain information only as long as reasonably necessary for the purposes described above, including to meet
        legal, accounting, or reporting requirements. We use reasonable administrative, technical, and organizational
        safeguards designed to protect information. No online or electronic transmission is completely secure.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or restrict certain processing of
        your personal information, or to opt out of certain disclosures. To exercise rights, contact us using the details
        below. We will respond in line with applicable law.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        Our services are directed to business professionals and are not intended for children under 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top will change when we do.
        Where required, we will provide additional notice. Continued use of our website or SMS program after updates
        means you acknowledge the revised Policy.
      </p>

      <h2>9. Contact us</h2>
      <p>
        Questions about this Privacy Policy, our data practices, or this SMS program may be directed to:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={"mailto:" + email}>{email}</a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href={"tel:" + phoneE164}>{phoneDisplay}</a>
        </li>
        <li>
          <strong>Intake / SMS line (published on this site):</strong>{" "}
          <a href={"tel:" + messagingNumberE164}>{messagingNumberDisplay}</a>
        </li>
      </ul>
      <p>
        <strong>Business mailing address:</strong>
      </p>
      <MailingAddressBlock />

      <p>
        For <Link to="/terms-and-conditions">Terms &amp; Conditions (Terms of Service)</Link>, including additional
        SMS terms, please see our separate terms page.
      </p>
    </LegalDocumentLayout>
  );
}

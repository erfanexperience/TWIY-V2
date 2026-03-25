import southeastImg from "../../Assests/Southeast.webp";
import businessImg from "../../Assests/Business.webp";
import meetingImg from "../../Assests/Meeting.webp";
import "../styles/growth-strategy.css";

export default function GrowthStrategy() {
  return (
    <section className="gs" id="growth-strategy" aria-labelledby="gs-heading">
      <div className="gs__inner">
        <header className="gs__header">
          <p className="gs__eyebrow">Growth Strategy &amp; Coverage</p>
          <h2 id="gs-heading" className="gs__title">
            Structured expansion with measurable operating discipline
          </h2>
          <p className="gs__lede">
            Our growth model combines territory development, surgeon alignment, operational infrastructure, and
            manufacturer partnership accountability to scale consistently across the Southeast.
          </p>
        </header>

        <div className="gs__layout">
          <article className="gs__block gs__block--territory">
            <div className="gs__media">
              <img src={southeastImg} alt="" className="gs__img" loading="lazy" decoding="async" />
            </div>
            <div className="gs__body">
              <h3 className="gs__blockTitle">Southeast territory development</h3>
              <p className="gs__blockText">
                Structured expansion into high-volume foot and ankle markets, designed to build dense coverage,
                accelerate account activation, and create sustainable regional momentum.
              </p>
              <p className="gs__chip">Territory Development</p>
            </div>
          </article>

          <article className="gs__block gs__block--ops">
            <div className="gs__media">
              <img src={businessImg} alt="" className="gs__img" loading="lazy" decoding="async" />
            </div>
            <div className="gs__body">
              <h3 className="gs__blockTitle">Operational infrastructure &amp; reporting</h3>
              <p className="gs__blockText">
                Standardized case protocols, inventory tracking systems, and performance metrics tied directly to
                growth objectives and field execution quality.
              </p>
              <p className="gs__chip">Infrastructure + Analytics</p>
            </div>
          </article>

          <article className="gs__block gs__block--partner">
            <div className="gs__media">
              <img src={meetingImg} alt="" className="gs__img" loading="lazy" decoding="async" />
            </div>
            <div className="gs__body">
              <h3 className="gs__blockTitle">Partnership model &amp; surgeon alignment</h3>
              <p className="gs__blockText">
                Targeted onboarding of high-performing surgeons and ASC networks, supported by transparent reporting,
                territory performance analytics, and quarterly growth strategy meetings.
              </p>
              <p className="gs__chip">Manufacturer Partnership Model</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


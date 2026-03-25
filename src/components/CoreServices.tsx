import surgicalImg from "../../Assests/Surgical.webp";
import biologicsImg from "../../Assests/Biologics.webp";
import inventoryImg from "../../Assests/Inventory.webp";
import surgeonImg from "../../Assests/Surgeon.webp";
import "../styles/core-services.css";

const SERVICES = [
  {
    title: "Surgical Case Coverage",
    description:
      "Structured case coverage from pre-case planning through in-room execution — standardized protocols and reliable OR presence aligned to your volume and growth objectives.",
    image: surgicalImg,
  },
  {
    title: "Biologics & Fixation Solutions",
    description:
      "Advanced implant systems and biologics from Medline, OSSIO, BoneSupport, Acera Surgical, and Biopoly — selected to support optimal outcomes and long-term stability.",
    image: biologicsImg,
  },
  {
    title: "Inventory & Logistics Management",
    description:
      "Coordinated logistics, inventory visibility, and performance metrics tied to growth — operational infrastructure built for accountability across territories.",
    image: inventoryImg,
  },
  {
    title: "Surgeon Education & Clinical Support",
    description:
      "Targeted education and clinical resources that strengthen surgeon alignment and ASC networks — empowering teams with the support exceptional cases demand.",
    image: surgeonImg,
  },
] as const;

export default function CoreServices() {
  return (
    <section className="cs" id="core-services" aria-labelledby="cs-heading">
      <div className="cs__inner">
        <header className="cs__header">
          <p className="cs__eyebrow">Core Services</p>
          <h2 id="cs-heading" className="cs__title">
            Comprehensive surgical support — built for scale
          </h2>
          <p className="cs__lede">
            Our model delivers precision, urgency, and integrity across the case lifecycle — from planning and
            logistics to in-room execution and follow-through — so surgeons and manufacturing partners can grow with
            confidence across the Southeast.
          </p>
        </header>

        <ul className="cs__grid">
          {SERVICES.map((item) => (
            <li key={item.title} className="cs__item">
              <article className="cs__card">
                <div className="cs__media">
                  <img
                    className="cs__img"
                    src={item.image}
                    alt=""
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="cs__mediaTint" aria-hidden />
                </div>
                <div className="cs__body">
                  <h3 className="cs__cardTitle">{item.title}</h3>
                  <p className="cs__cardText">{item.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

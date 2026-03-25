import brandPositioningImg from "../../Assests/Brand Positioning.webp";
import "../styles/brand-positioning.css";

export default function BrandPositioning() {
  return (
    <section className="bp" id="brand-positioning" aria-labelledby="bp-heading">
      <div className="bp__inner">
        <div className="bp__grid">
          <div className="bp__media">
            <img
              className="bp__img"
              src={brandPositioningImg}
              alt=""
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="bp__content">
            <p className="bp__eyebrow">Driving Surgical Growth Across the Southeast</p>
            <h2 id="bp-heading" className="bp__title">
              Foot &amp; Ankle Surgical Distribution — Built for the Southeast
            </h2>

            <div className="bp__prose">
              <p className="bp__lead">
                We are a specialized surgical distribution firm focused exclusively on foot and ankle solutions
                throughout the Southeast region.
              </p>
              <p>
                Representing leading technologies from Medline, OSSIO, BoneSupport, Acera Surgical, and Biopoly.
              </p>
              <p>
                We provide comprehensive surgical support — from pre-case planning and logistics coordination to
                in-room execution and post-case follow-through.
              </p>
              <p className="bp__closing">
                Our model is built for scalability, accountability, and long-term manufacturer growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

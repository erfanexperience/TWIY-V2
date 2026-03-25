import Hero from "./Hero";
import BrandPositioning from "./BrandPositioning";
import CoreServices from "./CoreServices";
import ManufacturerTechnology from "./ManufacturerTechnology";
import GrowthStrategy from "./GrowthStrategy";
import Differentiators from "./Differentiators";
import FinalCta from "./FinalCta";
import SiteFooter from "./SiteFooter";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BrandPositioning />
      <CoreServices />
      <ManufacturerTechnology />
      <GrowthStrategy />
      <Differentiators />
      <FinalCta />
      <SiteFooter />
    </>
  );
}


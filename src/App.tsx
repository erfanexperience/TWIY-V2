import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ConsultationBookingPage from "./components/ConsultationBookingPage";
import AboutUsPage from "./components/AboutUsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsConditionsPage from "./components/TermsConditionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consultation-booking" element={<ConsultationBookingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

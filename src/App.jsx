import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import Failed from "./pages/Failed";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import License from "./pages/License";
import LivePurchase from "./components/LivePurchase";
import Upsell from "./pages/Upsell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<License />} />
        <Route path="/upsell" element={<Upsell />} />
      </Routes>
      <LivePurchase />
    </BrowserRouter>
  );
}

export default App;
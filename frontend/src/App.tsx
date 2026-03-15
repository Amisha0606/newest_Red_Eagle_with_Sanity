import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ToppersPage from "./pages/ToppersPage";
import ContactPage from "./pages/ContactPage";
import BhopatpurBranch from "./pages/BhopatpurBranch";
import EventsListPage from "./pages/EventsListPage";
import EventDetailPage from "./pages/EventDetailPage";
import RulesPage from "./pages/RulesPage";
import FeesPage from "./pages/FeesPage";
import PublicDisclosurePage from "./pages/PublicDisclosure";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/toppers" element={<ToppersPage />} />
            <Route path="/eventGallery" element={<EventsListPage />} />
            <Route
              path="/eventGallery/:eventId"
              element={<EventDetailPage />}
            />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/fee-structure" element={<FeesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bhopatpur" element={<BhopatpurBranch />} />
            <Route
              path="/public-disclosure"
              element={<PublicDisclosurePage />}
            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

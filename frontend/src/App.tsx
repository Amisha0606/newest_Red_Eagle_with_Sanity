import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RedesignHome from "./pages/RedesignHome";
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

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Navbar />
//                 <Home />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <>
//                 <Navbar />
//                 <AboutPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/facilities"
//             element={
//               <>
//                 <Navbar />
//                 <FacilitiesPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/toppers"
//             element={
//               <>
//                 <Navbar />
//                 <ToppersPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/eventGallery"
//             element={
//               <>
//                 <Navbar />
//                 <EventsListPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/eventGallery/:eventId"
//             element={
//               <>
//                 <Navbar />
//                 <EventDetailPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/rules"
//             element={
//               <>
//                 <Navbar />
//                 <RulesPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/fee-structure"
//             element={
//               <>
//                 <Navbar />
//                 <FeesPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <>
//                 <Navbar />
//                 <ContactPage />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/bhopatpur"
//             element={
//               <>
//                 <Navbar />
//                 <BhopatpurBranch />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/public-disclosure"
//             element={
//               <>
//                 <Navbar />
//                 <PublicDisclosurePage />
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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

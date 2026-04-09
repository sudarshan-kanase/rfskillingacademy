import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import Programs from "./Programs";
import Impact from "./Impact";
import StateSelect from "./StateSelect";
import BottomCarousel from "./BottomCarousel";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import AuthModal from "./AuthModal";
import Benefits from "./Benefits";

// 👉 NEW PAGES
import About from "./About";
import Service from "./Service";
import Trading from "./Trading";
import Placement from "./Placement";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Contact from "./Contact";


// ✅ HOME PAGE
function Home() {
  return (
    <>
      <HeroSlider />
      <Programs />
      <Impact />
      <Benefits />
      <StateSelect />
      <BottomCarousel />
      <Footer />
      <AuthModal />
    </>
  );
}


// ✅ PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}


// ✅ APP
function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Navbar ALL pages वर दिसेल */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
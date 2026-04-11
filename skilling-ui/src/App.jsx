import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import Programs from "./Programs";
import Impact from "./Impact";
import StateSelect from "./StateSelect";
import BottomCarousel from "./BottomCarousel";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Benefits from "./Benefits";
import About from "./About";
import Service from "./Service";
import Trading from "./Trading";
import Placement from "./Placement";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Rrgister from "./Rrgister";
import Login from "./Login";

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
      <Rrgister/>
    </>
  );
}


// ✅ PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? children : <Navigate to="/" />;
}


// ✅ APP
function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Navbar ALL pages वर */}
      <Navbar />

      {/* 🔥 Modal global (IMPORTANT FIX) */}

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      


        {/* DASHBOARD */}
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
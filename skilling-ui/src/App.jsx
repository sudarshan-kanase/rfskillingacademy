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
import Register from "./Register"; // ✅ FIXED
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
    </>
  );
}

// ✅ PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? children : <Navigate to="/login" />;
}

// ✅ APP
function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Navbar */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<><Home /><Footer /></>} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* PAGES */}
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/service" element={<><Service /><Footer /></>} />
        <Route path="/trading" element={<><Trading /><Footer /></>} />
        <Route path="/placement" element={<><Placement /><Footer /></>} />
        <Route path="/blog" element={<><Blog /><Footer /></>} />
        <Route path="/gallery" element={<><Gallery /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />

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
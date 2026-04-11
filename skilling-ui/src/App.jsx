import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Service from "./Service";
import Trading from "./Trading";
import Placement from "./Placement";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import HeroSlider from "./HeroSlider";
import Programs from "./Programs";
import Impact from "./Impact";
import StateSelect from "./StateSelect";
import BottomCarousel from "./BottomCarousel";
import Benefits from "./Benefits";

// ✅ HOME
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

// ✅ PROTECTED
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* LOGIN DEFAULT */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

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

        {/* PROFILE (protected 🔥) */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
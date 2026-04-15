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

// HOME
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

// PROTECTED
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

        {/* HOME (PROTECTED ) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Home />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        {/* PAGES (ALL PROTECTED ) */}
        <Route path="/about" element={
          <ProtectedRoute><><About /><Footer /></></ProtectedRoute>
        } />

        <Route path="/service" element={
          <ProtectedRoute><><Service /><Footer /></></ProtectedRoute>
        } />

        <Route path="/trading" element={
          <ProtectedRoute><><Trading /><Footer /></></ProtectedRoute>
        } />

        <Route path="/placement" element={
          <ProtectedRoute><><Placement /><Footer /></></ProtectedRoute>
        } />

        <Route path="/blog" element={
          <ProtectedRoute><><Blog /><Footer /></></ProtectedRoute>
        } />

        <Route path="/gallery" element={
          <ProtectedRoute><><Gallery /><Footer /></></ProtectedRoute>
        } />

        <Route path="/contact" element={
          <ProtectedRoute><><Contact /><Footer /></></ProtectedRoute>
        } />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* PROFILE */}
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
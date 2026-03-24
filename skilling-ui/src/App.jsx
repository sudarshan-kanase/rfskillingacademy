import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import About from "./About";
import Programs from "./Programs";
import Impact from "./Impact";
import StateSelect from "./StateSelect";
import BottomCarousel from "./BottomCarousel";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import AuthModal from "./AuthModal";


// HOME PAGE COMPONENT
function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <Programs />
      <Impact />
      <StateSelect />
      <BottomCarousel />
      <Footer />
      <AuthModal />
    </>
  );
}


// PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* DASHBOARD PROTECTED */}
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
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Results from "./components/Results";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Contact from "./components/Contact";
import MarketingProfitPages from "./components/MarketingProfitPage";
import LogoTicker from "./components/LogoTicker";
import Process from "./components/Process";
import Careers from "./components/Careers";
import ComingSoon from "./components/ComingSoon";
import BookDemo from "./components/BookDemo";

// Home Page Component
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onCareersClick={() => {
          navigate("/careers");
          window.scrollTo(0, 0);
        }}
        onHomeClick={() => {
          navigate("/");
        }}
        onLoginClick={() => {
          navigate("/login");
          window.scrollTo(0, 0);
        }}
      />
      <main>
        <Hero
          onBookDemoClick={() => {
            navigate("/book-demo");
            window.scrollTo(0, 0);
          }}
        />
        <MarketingProfitPages />
        <LogoTicker />
        <Process />
        <Testimonials />
        <Results />
        <WhyChooseUs />
        <Services />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer
        onCareersClick={() => {
          navigate("/careers");
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
};

// Careers Page Component
const CareersPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onCareersClick={() => {
          navigate("/careers");
        }}
        onHomeClick={() => {
          navigate("/");
        }}
        onLoginClick={() => {
          navigate("/login");
        }}
      />
      <Careers onBack={() => navigate("/")} />
      <Footer
        onCareersClick={() => {
          navigate("/careers");
        }}
      />
    </>
  );
};

// Book Demo Page Component
const BookDemoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onCareersClick={() => {
          navigate("/careers");
          window.scrollTo(0, 0);
        }}
        onHomeClick={() => {
          navigate("/");
        }}
        onLoginClick={() => {
          navigate("/login");
          window.scrollTo(0, 0);
        }}
      />
      <BookDemo onBack={() => navigate("/")} />
    </>
  );
};

// Login/Coming Soon Page Component
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        onCareersClick={() => {
          navigate("/careers");
        }}
        onHomeClick={() => {
          navigate("/");
        }}
        onLoginClick={() => {
          navigate("/login");
        }}
      />
      <ComingSoon onBack={() => navigate("/")} />
      <Footer
        onCareersClick={() => {
          navigate("/careers");
        }}
      />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router basename={(import.meta as any).env.BASE_URL}>
      <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover">
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

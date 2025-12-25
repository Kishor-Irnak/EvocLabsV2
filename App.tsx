import React, { useState } from "react";
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

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"home" | "careers">("home");

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-primary-hover">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar
            onCareersClick={() => {
              setView("careers");
              window.scrollTo(0, 0);
            }}
            onHomeClick={() => {
              setView("home");
            }}
          />
          {view === "home" ? (
            <main>
              <Hero />
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
          ) : (
            <Careers onBack={() => setView("home")} />
          )}
          <Footer
            onCareersClick={() => {
              setView("careers");
              window.scrollTo(0, 0);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;

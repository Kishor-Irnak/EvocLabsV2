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
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import Contact from "./components/Contact";
import VideoSection from "./components/VideoSection";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <VideoSection />
            <Testimonials />
            <Results />
            <WhyChooseUs />
            <Services />
            <Founder />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

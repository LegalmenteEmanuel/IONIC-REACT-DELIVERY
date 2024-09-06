import React from "react";
import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import FeaturesSection from "../components/LandingPage/FeaturesSection";
import TestimonialsSection from "../components/LandingPage/TestimonialSection";
import DownloadAppSection from "../components/LandingPage/DowloadAppSection";
import Footer from "../components/LandingPage/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, //Aqui se ajusta la duración
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      style={{ marginBottom: '50px' }} // Añade margen inferior para asegurar la visibilidad
    >
      {children}
    </motion.div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div style={{ overflow: 'auto', height: '100%' }}>
      <Header />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <DownloadAppSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default LandingPage;

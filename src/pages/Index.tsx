import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ReferencesSection from '@/components/ReferencesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if this is the first visit synchronously
    const hasVisited = sessionStorage.getItem('pega-visited');
    return !hasVisited;
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('pega-visited', 'true');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen bg-background noise-overlay ${isLoading ? 'pointer-events-none' : ''}`}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <ReferencesSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'PEGA BİLİŞİM';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start glitch effect
        setTimeout(() => {
          setShowGlitch(true);
          setTimeout(() => {
            setShowGlitch(false);
            setTimeout(() => {
              setShowGlitch(true);
              setTimeout(() => {
                setShowGlitch(false);
                setIsComplete(true);
                setTimeout(onComplete, 800);
              }, 100);
            }, 200);
          }, 150);
        }, 300);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 scanline pointer-events-none" />
          
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative">
            {/* Main text */}
            <motion.h1
              className={`font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider ${
                showGlitch ? 'flicker' : ''
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-glow">{displayText}</span>
              <span className="terminal-cursor" />
            </motion.h1>

            {/* Glitch layers */}
            {showGlitch && (
              <>
                <h1 className="absolute inset-0 font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-foreground/50 glitch-effect">
                  {displayText}
                </h1>
                <h1 
                  className="absolute inset-0 font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-foreground/30"
                  style={{ 
                    clipPath: 'inset(20% 0 60% 0)',
                    transform: 'translate(2px, -2px)'
                  }}
                >
                  {displayText}
                </h1>
              </>
            )}
          </div>

          {/* Bottom loading bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-px bg-muted overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-foreground"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            SİSTEM BAŞLATILIYOR...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground border border-border px-4 py-2">
              SOFTWARE SOLUTIONS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
          >
            Daha Güçlü Bir Deneyim İçin{' '}
            <span className="text-glow">Hazırlanıyoruz</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-mono text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Pega Bilişim olarak dijital çözümleri daha güçlü, daha sade ve daha etkili hale getiriyoruz.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/iletisim"
              className="group inline-flex items-center gap-3 font-orbitron text-sm tracking-widest border border-foreground px-8 py-4 hover-glow bg-transparent hover:bg-foreground hover:text-background transition-all duration-300"
            >
              İLETİŞİME GEÇ
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

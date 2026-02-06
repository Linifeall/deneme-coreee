import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

// Static references for now - will be dynamic with backend
const references = [
  {
    id: 1,
    name: 'TechStart Solutions',
    logo: 'TS',
    website: 'https://example.com',
  },
  {
    id: 2,
    name: 'Digital Wave Agency',
    logo: 'DW',
    website: 'https://example.com',
  },
  {
    id: 3,
    name: 'CloudNine Systems',
    logo: 'C9',
    website: 'https://example.com',
  },
  {
    id: 4,
    name: 'NextGen Industries',
    logo: 'NG',
    website: 'https://example.com',
  },
];

const ReferenceCard = ({ reference, index }: { reference: typeof references[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={reference.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-border bg-card p-8 flex flex-col items-center justify-center hover-glow transition-all duration-300 hover:border-foreground/30"
    >
      {/* Logo placeholder */}
      <div className="w-20 h-20 border border-border flex items-center justify-center mb-6 group-hover:border-foreground/50 transition-colors">
        <span className="font-orbitron text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
          {reference.logo}
        </span>
      </div>

      {/* Company name */}
      <h3 className="font-orbitron text-sm tracking-wider text-center mb-2">
        {reference.name}
      </h3>

      {/* External link icon */}
      <ExternalLink 
        size={14} 
        className="text-muted-foreground group-hover:text-foreground transition-colors"
      />

      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-foreground/0 group-hover:border-foreground/10 transition-all duration-300" />
    </motion.a>
  );
};

const ReferencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="referanslar" className="relative py-32 bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 block">
            // REFERANSLARIMIZ
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-tight">
            Güvenilen İş Ortakları
          </h2>
        </motion.div>

        {/* References grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {references.map((reference, index) => (
            <ReferenceCard key={reference.id} reference={reference} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-xs text-muted-foreground text-center mt-12"
        >
          * Referanslarımız admin paneli üzerinden yönetilmektedir.
        </motion.p>
      </div>
    </section>
  );
};

export default ReferencesSection;

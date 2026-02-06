import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Code, Users, Calculator } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web & E-Ticaret Siteleri',
    description: 'Modern, hızlı ve SEO uyumlu web siteleri. Satış odaklı e-ticaret çözümleri.',
    code: '01',
  },
  {
    icon: Code,
    title: 'Özel Yazılım Geliştirme',
    description: 'İşletmenize özel yazılım çözümleri. Ölçeklenebilir ve sürdürülebilir mimari.',
    code: '02',
  },
  {
    icon: Users,
    title: 'CRM & Müşteri Deneyimi',
    description: 'Müşteri ilişkilerini güçlendiren, verimliliği artıran CRM sistemleri.',
    code: '03',
  },
  {
    icon: Calculator,
    title: 'Muhasebe & İş Süreçleri',
    description: 'İş süreçlerinizi dijitalleştiren muhasebe ve yönetim yazılımları.',
    code: '04',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative border border-border bg-card p-8 hover-glow transition-all duration-500 hover:border-foreground/30"
    >
      {/* Code number */}
      <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
        {service.code}
      </span>

      {/* Icon */}
      <div className="mb-6">
        <service.icon 
          size={32} 
          strokeWidth={1} 
          className="text-foreground group-hover:text-glow transition-all"
        />
      </div>

      {/* Title */}
      <h3 className="font-orbitron text-lg font-semibold mb-4 tracking-wide">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 h-px bg-foreground transition-all duration-500 w-0 group-hover:w-full" />
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hizmetler" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 block">
            // HİZMETLERİMİZ
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-tight">
            Dijital Çözümler
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.code} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Mesajınız alındı',
      description: 'En kısa sürede size dönüş yapacağız.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              ANA SAYFAYA DÖN
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column - Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 block">
                // İLETİŞİM
              </span>
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Bizimle <span className="text-glow">İletişime</span> Geçin
              </h1>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-12 max-w-md">
                Projeleriniz hakkında konuşmak veya sorularınızı sormak için bize ulaşabilirsiniz.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <a 
                  href="mailto:info@pegabilisim.com.tr"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                    <Mail size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">E-POSTA</p>
                    <p className="font-orbitron text-sm">info@pegabilisim.com.tr</p>
                  </div>
                </a>

                <a 
                  href="tel:+905062353582"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                    <Phone size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">TELEFON</p>
                    <p className="font-orbitron text-sm">+90 506 235 35 82</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-xs text-muted-foreground mb-2 block">
                    AD SOYAD
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                    placeholder="Adınızı girin..."
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground mb-2 block">
                    E-POSTA
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                    placeholder="E-posta adresinizi girin..."
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted-foreground mb-2 block">
                    MESAJINIZ
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                    placeholder="Projeniz hakkında bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 font-orbitron text-sm tracking-widest border border-foreground px-8 py-4 hover-glow bg-transparent hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

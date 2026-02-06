import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="font-orbitron font-bold text-xl tracking-wider inline-block mb-4">
              PEGA<span className="text-muted-foreground">BİLİŞİM</span>
            </Link>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Dijital çözümleri daha güçlü, daha sade ve daha etkili hale getiriyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm tracking-wider mb-4">HIZLI ERİŞİM</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/#hizmetler" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                Hizmetler
              </Link>
              <Link to="/#referanslar" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                Referanslar
              </Link>
              <Link to="/iletisim" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                İletişim
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-sm tracking-wider mb-4">İLETİŞİM</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@pegabilisim.com.tr" 
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={14} />
                info@pegabilisim.com.tr
              </a>
              <a 
                href="tel:+905062353582" 
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={14} />
                +90 506 235 35 82
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            © {currentYear} PEGA BİLİŞİM. TÜM HAKLARI SAKLIDIR.
          </p>
          <Link 
            to="/admin/login" 
            className="font-mono text-[10px] text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

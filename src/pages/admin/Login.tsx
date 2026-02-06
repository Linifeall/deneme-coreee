import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - will be replaced with real auth
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Demo credentials
    if (email === 'admin@pegabilisim.com.tr' && password === 'admin123') {
      sessionStorage.setItem('pega-admin', 'true');
      toast({
        title: 'Giriş başarılı',
        description: 'Admin paneline yönlendiriliyorsunuz...',
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: 'Giriş başarısız',
        description: 'E-posta veya şifre hatalı.',
        variant: 'destructive',
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Terminal header */}
        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3 flex items-center gap-3">
            <Terminal size={16} className="text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">admin@pega:~$ login</span>
          </div>

          <div className="p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 className="font-orbitron text-2xl font-bold tracking-wider mb-2">
                PEGA<span className="text-muted-foreground">ADMIN</span>
              </h1>
              <p className="font-mono text-xs text-muted-foreground">
                Yönetim Paneli Girişi
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-2 block">
                  E-POSTA
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                  placeholder="admin@pegabilisim.com.tr"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground mb-2 block">
                  ŞİFRE
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 pr-12 font-mono text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full font-orbitron text-sm tracking-widest border border-foreground py-4 hover-glow bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    BAĞLANIYOR...
                  </span>
                ) : (
                  'GİRİŞ YAP'
                )}
              </button>
            </form>

            {/* Demo credentials hint */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-[10px] text-muted-foreground text-center">
                Demo: admin@pegabilisim.com.tr / admin123
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

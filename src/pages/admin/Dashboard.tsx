import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Reference {
  id: number;
  name: string;
  logo: string;
  website: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [references, setReferences] = useState<Reference[]>([
    { id: 1, name: 'TechStart Solutions', logo: 'TS', website: 'https://example.com' },
    { id: 2, name: 'Digital Wave Agency', logo: 'DW', website: 'https://example.com' },
    { id: 3, name: 'CloudNine Systems', logo: 'C9', website: 'https://example.com' },
    { id: 4, name: 'NextGen Industries', logo: 'NG', website: 'https://example.com' },
  ]);
  const [editingRef, setEditingRef] = useState<Reference | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check auth
    const isAdmin = sessionStorage.getItem('pega-admin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('pega-admin');
    navigate('/admin/login');
  };

  const handleDelete = (id: number) => {
    setReferences(references.filter(r => r.id !== id));
    toast({
      title: 'Referans silindi',
      description: 'Referans başarıyla silindi.',
    });
  };

  const handleSave = (ref: Reference) => {
    if (editingRef) {
      setReferences(references.map(r => r.id === ref.id ? ref : r));
      toast({ title: 'Referans güncellendi' });
    } else {
      setReferences([...references, { ...ref, id: Date.now() }]);
      toast({ title: 'Referans eklendi' });
    }
    setShowModal(false);
    setEditingRef(null);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 64 }}
        className="fixed left-0 top-0 h-full bg-card border-r border-border z-40 overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          {sidebarOpen && (
            <span className="font-orbitron font-bold text-sm tracking-wider">
              PEGA<span className="text-muted-foreground">ADMIN</span>
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-secondary transition-colors"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2 bg-secondary text-foreground font-mono text-xs"
          >
            <LayoutDashboard size={18} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link
            to="/admin/references"
            className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors font-mono text-xs"
          >
            <Users size={18} />
            {sidebarOpen && <span>Referanslar</span>}
          </Link>
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors font-mono text-xs"
          >
            <LogOut size={18} />
            {sidebarOpen && <span>Çıkış Yap</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main content */}
      <main 
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? 256 : 64 }}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-orbitron text-2xl font-bold tracking-wider mb-2">
                Referanslar
              </h1>
              <p className="font-mono text-xs text-muted-foreground">
                Referansları buradan yönetebilirsiniz.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingRef(null);
                setShowModal(true);
              }}
              className="flex items-center gap-2 font-orbitron text-xs tracking-widest border border-foreground px-4 py-2 hover-glow bg-transparent hover:bg-foreground hover:text-background transition-all"
            >
              <Plus size={16} />
              YENİ EKLE
            </button>
          </div>

          {/* References table */}
          <div className="border border-border">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border bg-secondary/30 font-mono text-xs text-muted-foreground">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">LOGO</div>
              <div className="col-span-4">FİRMA ADI</div>
              <div className="col-span-3">WEBSİTE</div>
              <div className="col-span-2">İŞLEMLER</div>
            </div>

            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border last:border-b-0 items-center hover:bg-secondary/20 transition-colors"
              >
                <div className="col-span-1 font-mono text-xs text-muted-foreground">
                  #{ref.id}
                </div>
                <div className="col-span-2">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <span className="font-orbitron text-sm font-bold">{ref.logo}</span>
                  </div>
                </div>
                <div className="col-span-4 font-orbitron text-sm">
                  {ref.name}
                </div>
                <div className="col-span-3">
                  <a 
                    href={ref.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={12} />
                    Link
                  </a>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingRef(ref);
                      setShowModal(true);
                    }}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(ref.id)}
                    className="p-2 hover:bg-destructive/20 text-destructive transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <ReferenceModal
          reference={editingRef}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setEditingRef(null);
          }}
        />
      )}
    </div>
  );
};

interface ModalProps {
  reference: Reference | null;
  onSave: (ref: Reference) => void;
  onClose: () => void;
}

const ReferenceModal = ({ reference, onSave, onClose }: ModalProps) => {
  const [formData, setFormData] = useState({
    name: reference?.name || '',
    logo: reference?.logo || '',
    website: reference?.website || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: reference?.id || 0,
      ...formData,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md border border-border bg-card"
      >
        <div className="border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="font-orbitron text-sm tracking-wider">
            {reference ? 'REFERANS DÜZENLE' : 'YENİ REFERANS'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-secondary transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="font-mono text-xs text-muted-foreground mb-2 block">
              FİRMA ADI
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-muted-foreground mb-2 block">
              LOGO (2 HARF)
            </label>
            <input
              type="text"
              value={formData.logo}
              onChange={(e) => setFormData({ ...formData, logo: e.target.value.toUpperCase().slice(0, 2) })}
              required
              maxLength={2}
              className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-muted-foreground mb-2 block">
              WEBSİTE URL
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              required
              className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/50"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 font-orbitron text-xs tracking-widest border border-border py-3 hover:bg-secondary transition-colors"
            >
              İPTAL
            </button>
            <button
              type="submit"
              className="flex-1 font-orbitron text-xs tracking-widest border border-foreground py-3 bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors"
            >
              KAYDET
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;

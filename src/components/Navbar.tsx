import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Building2, Briefcase, Info, MessageSquare, User, LayoutDashboard } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Building2 },
    { name: 'Jobs', path: '/jobs', icon: Briefcase },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: MessageSquare },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="text-dark-900 w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold track-tighter">
            Hyr<span className="text-gold-500">Estate</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-gold-500',
                location.pathname === link.path ? 'text-gold-500' : 'text-gray-400'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-lg font-medium text-gray-300 hover:text-gold-500"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-lg font-medium text-gray-300"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

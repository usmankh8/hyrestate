import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple admin check
    if (email === 'admin@hyrestate.com' && password === 'HyrEstate2026!') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/dashboard');
      return;
    }
    
    // For demo purposes, we allow standard login too
    if (email && password.length >= 6) {
      localStorage.setItem('isAdmin', 'false');
      navigate('/dashboard');
      return;
    }

    alert('Invalid credentials. Admin use admin@hyrestate.com / HyrEstate2026!');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-gradient opacity-[0.03] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gold-gradient opacity-[0.03] blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
              <Building2 className="text-dark-900 w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold">HyrEstate</span>
          </Link>
          <h2 className="text-2xl font-bold track-tighter">PORTAL ACCESS</h2>
          <p className="text-gray-500 text-sm mt-2">Enter your credentials to access the recruiter dashboard.</p>
        </div>

        <div className="glass rounded-[32px] p-8 md:p-10 border border-white/10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold-500/50 transition-all"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-bold">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold-500/50 transition-all font-bold"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button type="button" className="text-xs text-gold-500 hover:underline font-bold">Forgot password?</button>
              </div>
            </div>

            <button
               type="submit"
               className="w-full py-4 rounded-2xl gold-gradient text-dark-900 font-extrabold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-gold-500/20"
            >
              Sign In <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              Don't have an agent account? <Link to="/register" className="text-gold-500 font-bold hover:underline">Apply Here</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

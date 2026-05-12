import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, User, Lock, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Register() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-gradient opacity-[0.03] blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
              <Building2 className="text-dark-900 w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold">HyrEstate</span>
          </Link>
          <h2 className="text-2xl font-bold track-tighter">JOIN THE ELITE</h2>
          <p className="text-gray-500 text-sm mt-2">Start your journey to becoming a top real estate agent in Pakistan.</p>
        </div>

        <div className="glass rounded-[32px] p-8 md:p-12 border border-white/10">
          <div className="flex items-center justify-between mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500',
                  step >= s ? 'gold-gradient text-dark-900' : 'bg-white/5 text-gray-500 border border-white/10'
                )}>
                  {s}
                </div>
                <div className={cn(
                  'text-[10px] mt-2 font-bold uppercase tracking-widest',
                  step >= s ? 'text-gold-500' : 'text-gray-600'
                )}>
                  {s === 1 ? 'PERSONAL' : s === 2 ? 'PROFESSIONAL' : 'ACCOUNT'}
                </div>
              </div>
            ))}
          </div>

          <form className="space-y-6">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nationality</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" placeholder="e.g. British" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Sales Experience</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50 appearance-none">
                    <option>No experience</option>
                    <option>1-2 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div className="w-full border-2 border-dashed border-white/10 rounded-3xl p-8 text-center hover:border-gold-500/50 transition-colors cursor-pointer">
                  <Briefcase className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest">Upload CV</p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
                  <input type="password" title="password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" />
                </div>
                <div className="flex items-start space-x-3 p-4 glass rounded-2xl">
                  <ShieldCheck className="text-gold-500 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                    By registering, you agree to our Terms of Service.
                  </p>
                </div>
              </motion.div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="flex-1 py-4 rounded-2xl glass border border-white/10 font-bold">
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className="flex-[2] py-4 rounded-2xl gold-gradient text-dark-900 font-extrabold text-lg flex items-center justify-center gap-2"
              >
                {step === 3 ? 'Finish' : 'Next'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

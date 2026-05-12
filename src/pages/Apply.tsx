import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  FileText, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Upload,
  Info,
  Shield
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type Step = 'personal' | 'professional' | 'payment' | 'success';

export default function Apply() {
  const [step, setStep] = useState<Step>('personal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    cv: null as File | null,
    paymentProof: null as File | null,
    agreed: false
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 'personal') setStep('professional');
    else if (step === 'professional') setStep('payment');
    else if (step === 'payment') setStep('success');
  };

  const steps = [
    { id: 'personal', label: 'Basic Info', icon: User },
    { id: 'professional', label: 'Experience', icon: FileText },
    { id: 'payment', label: 'Registration', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto px-4">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1 last:flex-none">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                step === s.id ? "gold-gradient text-dark-900 scale-110 shadow-lg shadow-gold-500/20" : 
                (steps.findIndex(x => x.id === step) > i ? "bg-green-500 text-white" : "bg-white/5 text-gray-600")
              )}>
                {steps.findIndex(x => x.id === step) > i ? <CheckCircle2 className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
              </div>
              {i < steps.length - 1 && (
                <div className="h-0.5 flex-1 mx-4 bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: steps.findIndex(x => x.id === step) > i ? '100%' : '0%' }}
                    className="h-full gold-gradient"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-10 rounded-[40px]"
            >
              <h2 className="text-3xl font-display font-bold mb-8 italic">Tell us about <span className="gold-text">yourself</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-gold-500 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-gold-500/50 transition-all font-medium"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-gold-500 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-gold-500/50 transition-all font-medium"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone Number (WhatsApp)</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-gold-500 transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-gold-500/50 transition-all font-medium"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <button 
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full py-5 rounded-2xl gold-gradient text-dark-900 font-bold tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
              >
                CONTINUE TO PROFESSIONAL INFO <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 'professional' && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-10 rounded-[40px]"
            >
              <h2 className="text-3xl font-display font-bold mb-8 italic">Your <span className="gold-text">Career</span> Story</h2>
              <div className="space-y-8 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Years of Experience</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-gold-500/50 transition-all font-medium"
                    value={formData.experience}
                    onChange={e => setFormData({...formData, experience: e.target.value})}
                  >
                    <option value="" className="bg-dark-900">Select Experience</option>
                    <option value="0-1" className="bg-dark-900">Entry Level (0-1 Years)</option>
                    <option value="1-3" className="bg-dark-900">Junior (1-3 Years)</option>
                    <option value="3-5" className="bg-dark-900">Mid-Level (3-5 Years)</option>
                    <option value="5+" className="bg-dark-900">Senior (5+ Years)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Upload CV (PDF preferred)</label>
                  <div className="w-full aspect-[4/1] bg-white/5 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 hover:border-gold-500/50 transition-all cursor-pointer group relative overflow-hidden">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={e => setFormData({...formData, cv: e.target.files?.[0] || null})}
                    />
                    {formData.cv ? (
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-500 w-8 h-8" />
                        <span className="font-bold text-white uppercase tracking-wider">{formData.cv.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-gold-500 mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-gray-500">Click to upload your professional resume</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button 
                onClick={handleNext}
                disabled={!formData.experience || !formData.cv}
                className="w-full py-5 rounded-2xl gold-gradient text-dark-900 font-bold tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
              >
                CONTINUE TO PAYMENT <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 'payment' && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-10 rounded-[40px]"
            >
              <div className="flex items-start gap-6 mb-10">
                <div className="w-20 h-20 rounded-3xl gold-gradient flex items-center justify-center shrink-0">
                  <CreditCard className="text-dark-900 w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold italic mb-2">Registration <span className="gold-text">Fee</span></h2>
                  <p className="text-gray-500 leading-relaxed max-w-lg">
                    To maintain our elite standard and verify your professional intent, a one-time registration fee of 1,499 PKR is required.
                  </p>
                </div>
              </div>

              {/* Payment Card */}
              <div className="bg-dark-950/50 border border-gold-500/30 rounded-3xl p-8 mb-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-gold-500/10 text-gold-500 text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full uppercase">Official Payment Channel</div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Easypaisa_logo.svg/1200px-Easypaisa_logo.svg.png" className="h-6 object-contain" alt="Easypaisa" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 font-bold text-[10px] uppercase tracking-widest mb-1">Account Holder Name</p>
                    <p className="text-2xl font-display font-medium uppercase tracking-tighter">Soban Hassan</p>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-gold-500/40 transition-all">
                    <div>
                      <p className="text-gray-600 font-bold text-[10px] uppercase tracking-widest mb-1">Account Number</p>
                      <p className="text-xl font-mono font-bold tracking-wider">0335 5540093</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center">
                       <Shield className="text-gold-500 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between text-xl font-bold bg-gold-500 text-dark-900 p-4 -mx-8 -mb-8">
                   <div className="px-4 tracking-tighter">PAYMENT TOTAL</div>
                   <div className="px-4">1,499 PKR</div>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Upload Transaction Proof (Screenshot)</label>
                  <div className="w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between relative group overflow-hidden">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={e => setFormData({...formData, paymentProof: e.target.files?.[0] || null})}
                    />
                    <span className="text-sm font-medium text-gray-500">
                      {formData.paymentProof ? formData.paymentProof.name : "Select screenshot..."}
                    </span>
                    <Upload className="w-5 h-5 text-gold-500" />
                  </div>
                </div>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="mt-1">
                    <div className={cn(
                      "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                      formData.agreed ? "bg-gold-500 border-gold-500" : "border-white/10 group-hover:border-gold-500/50"
                    )}>
                      {formData.agreed && <CheckCircle2 className="w-4 h-4 text-dark-900" />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={formData.agreed}
                      onChange={e => setFormData({...formData, agreed: e.target.checked})}
                    />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    I agree to the <span className="text-gold-500 hover:underline">Privacy Policy & Terms</span> and understand that the registration fee is non-refundable and does not guarantee a job.
                  </p>
                </label>

                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0" />
                  <p className="text-[10px] text-blue-500 font-medium">After verification of payment, our recruitment team will contact you via WhatsApp for further documentation and interview scheduling.</p>
                </div>
              </div>

              <button 
                onClick={handleNext}
                disabled={!formData.paymentProof || !formData.agreed}
                className="w-full py-5 rounded-2xl gold-gradient text-dark-900 font-bold tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
              >
                SUBMIT APPLICATION VERIFICATION <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-16 rounded-[48px] text-center"
            >
              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-10 border-4 border-green-500 shadow-lg shadow-green-500/20">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-4xl font-display font-bold italic mb-6 uppercase tracking-tighter">Application <span className="gold-text">Successful</span></h2>
              <p className="text-gray-500 mb-12 text-lg max-w-xl mx-auto">
                Thank you for choosing HyrEstate. Your information and payment proof have been received. Our luxury recruitment experts will review your file and contact you via WhatsApp within 24-48 hours.
              </p>
              <div className="flex flex-col sm:row gap-4 justify-center">
                 <button 
                  onClick={() => navigate('/')}
                  className="px-10 py-5 rounded-2xl gold-gradient text-dark-900 font-bold tracking-widest hover:scale-105 transition-all"
                >
                  RETURN HOME
                </button>
                <a 
                  href="https://wa.me/923286987365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold tracking-widest hover:bg-white/10 transition-all"
                >
                  CONTACT WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

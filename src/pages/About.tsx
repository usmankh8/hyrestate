import { motion } from 'motion/react';
import { Building2, Users, Target, Globe, Award, ShieldCheck, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="bg-dark-900 min-h-screen text-white">
      {/* Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold-500)_0%,_transparent_70%)] opacity-[0.05]"></div>
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-3xl bg-gold-500/10 border border-gold-500/20 mb-8"
          >
            <Building2 className="w-12 h-12 text-gold-500" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold track-tighter mb-8 leading-[0.9]">
            REDEFINING <span className="gold-text">LUXURY</span> <br /> RECRUITMENT
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light">
            We are more than a recruitment agency. We are the bridge between world-class talent and Pakistan's most prestigious real estate developers.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To provide the UAE real estate industry with a consistent flow of highly trained, ethical, and motivated professionals.' },
              { icon: Globe, title: 'National Reach', desc: 'Recruiting across all major cities, we bring a diverse and nationwide perspective to the Pakistan property market.' },
              { icon: Award, title: 'Excellence', desc: 'We only partner with agencies that meet our strict criteria for professionalism and agent support.' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:gold-gradient group-hover:text-dark-900 transition-all">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Spirit */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass p-2 border-white/10 group">
                   <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2073" 
                    alt="Dubai Corporate" 
                    className="w-full h-full object-cover rounded-[32px] grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 gold-gradient p-10 rounded-3xl hidden md:block">
                  <div className="text-dark-900 font-display font-black text-6xl leading-none">10+</div>
                  <div className="text-dark-900 font-bold uppercase tracking-widest text-sm mt-2">Years In Dubai</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                THE PAKISTAN <br /> <span className="gold-text">IDENTITY</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Based in the heart of Pakistan, we live and breathe the local property boom. We understand the unique challenges of the market and what it takes for a new agent to succeed.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                   <ShieldCheck className="text-gold-500 w-8 h-8" />
                   <h4 className="font-bold">Verified Partners</h4>
                   <p className="text-sm text-gray-500">All employers are vetted for financial stability and office culture.</p>
                </div>
                <div className="space-y-4">
                   <Heart className="text-gold-500 w-8 h-8" />
                   <h4 className="font-bold">Human Centered</h4>
                   <p className="text-sm text-gray-500">We treat our applicants like family, guiding you through every step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

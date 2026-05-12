import { motion } from 'motion/react';
import { ChevronRight, Star, CheckCircle2, TrendingUp, Users, Briefcase, Award, ArrowUpRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const stats = [
    { label: 'Potential Monthly Earnings', value: '85K - 120K PKR', icon: TrendingUp },
    { label: 'Exclusive Partner Agencies', value: '250+', icon: Building2 },
    { label: 'Active Job Openings', value: '1,420', icon: Briefcase },
    { label: 'Successfully Placed', value: '4.8k+', icon: Users },
  ];

  const companies = [
    'https://logos-world.net/wp-content/uploads/2021/08/Damac-Properties-Logo.png',
    'https://logos-world.net/wp-content/uploads/2021/08/Emaar-Properties-Logo.png',
    'https://seeklogo.com/images/S/sobha-realty-logo-E9E6F1F107-seeklogo.com.png',
    'https://seeklogo.com/images/N/nakheel-logo-0A9D28B1E3-seeklogo.com.png',
    'https://seeklogo.com/images/D/dubai-properties-logo-4A1C80E5A7-seeklogo.com.png',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-gold-500/30 bg-gold-500/5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Elite Recruitment Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-4"
            >
              GET A <span className="gold-text">REAL ESTATE</span> JOB IN PAKISTAN
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1.5 gold-gradient rounded-full mb-8"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl"
            >
              Build your future with top real estate companies in Pakistan. We connect elite talent with high-commission opportunities in the country's most luxurious property markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/apply"
                className="px-8 py-4 rounded-full gold-gradient text-dark-900 font-bold hover:shadow-2xl hover:shadow-gold-500/40 transition-all flex items-center group"
              >
                Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/923286987365"
                className="px-8 py-4 rounded-full glass border border-white/20 hover:bg-white/10 transition-all font-bold flex items-center"
              >
                Join WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block mr-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl w-64 animate-float">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <TrendingUp className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Salary Peak</p>
                  <p className="font-bold">120K PKR</p>
                </div>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full gold-gradient"
                ></motion.div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl w-72 translate-x-12">
              <div className="flex items-center -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                    {i === 4 ? '+12' : <img src={`https://i.pravatar.cc/150?u=${i}`} className="rounded-full" />}
                  </div>
                ))}
                <span className="ml-4 text-xs text-gray-400 font-medium">Hired this week</span>
              </div>
              <p className="text-sm font-semibold">Join 4.8k experts in Karachi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-12">Trusted by Global Giants</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 invert hover:opacity-80 transition-opacity">
            {companies.map((logo, i) => (
              <img key={i} src={logo} alt="Partner" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold-500)_0%,_transparent_70%)] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl group hover:border-gold-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                WHY CHOOSE <span className="gold-text">HYRESTATE</span>?
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Exclusive Career Pool', desc: 'Join our verified candidate list. We match your profile with elite agency requirements.' },
                  { title: 'Career Development Support', desc: 'Top candidates receive full assistance with professional growth and networking.' },
                  { title: 'Expert Training Academy', desc: 'Get trained by the top 1% real estate brokers in Pakistan before starting.' },
                  { title: 'High Commission Tiers', desc: 'Access jobs with the highest commission splits in the industry.' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-gold-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 p-2">
                <img
                   src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&q=80&w=2070"
                   alt="Luxury Office"
                   className="w-full h-full object-cover rounded-2xl"
                   referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block max-w-[280px]">
                <div className="flex items-center space-x-2 text-gold-500 mb-4">
                   <Star className="fill-current w-4 h-4" />
                   <Star className="fill-current w-4 h-4" />
                   <Star className="fill-current w-4 h-4" />
                   <Star className="fill-current w-4 h-4" />
                   <Star className="fill-current w-4 h-4" />
                </div>
                <p className="text-sm italic font-medium">"HyrEstate transformed my career. I'm now making more in a quarter than I did in a year."</p>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="font-bold text-xs uppercase tracking-widest">Ahmad Khan</p>
                  <p className="text-[10px] text-gray-500">Luxury Specialist, Damac</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="gold-gradient p-[1px] rounded-[40px]">
            <div className="bg-dark-900 rounded-[39px] p-12 md:p-20 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-gold-500)_0%,_transparent_40%)] opacity-20"></div>
               <h2 className="text-4xl md:text-6xl font-display font-bold track-tighter mb-8 relative z-10">
                 READY TO BUILD YOUR <span className="gold-text">PAKISTAN FUTURE</span>?
               </h2>
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <Link
                   to="/jobs"
                   className="px-10 py-5 rounded-full gold-gradient text-dark-900 font-extrabold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-gold-500/20"
                 >
                   View All Jobs <ArrowUpRight className="w-5 h-5" />
                 </Link>
                 <Link
                   to="/contact"
                   className="px-10 py-5 rounded-full glass border border-white/20 hover:bg-white/5 font-bold transition-all"
                 >
                   Talk to an Expert
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

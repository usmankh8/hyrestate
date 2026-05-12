import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold track-tighter mb-8 leading-[0.9]">
                TALK TO AN <br /> <span className="gold-text">EXPERT</span>
              </h1>
              <p className="text-gray-500 text-lg mb-12 max-w-md">
                Have questions about starting your real estate career in Pakistan? Our team is here to guide you.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'Call Us', value: '+92 300 0000000' },
                  { icon: Mail, label: 'Email', value: 'support@hyrestate.online' },
                  { icon: MapPin, label: 'Visit', value: 'Karachi, Pakistan' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                      <item.icon className="text-gold-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-600">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[40px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 blur-[80px]"></div>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                   <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50 appearance-none font-bold">
                      <option className="bg-dark-900">Career Advice</option>
                      <option className="bg-dark-900">Job Application Support</option>
                      <option className="bg-dark-900">Partnership Inquiry</option>
                      <option className="bg-dark-900">General Information</option>
                   </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-gold-500/50 resize-none" placeholder="How can we help you succeed in Pakistan?"></textarea>
                </div>
                <button className="w-full py-5 rounded-2xl gold-gradient text-dark-900 font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full grayscale opacity-50 relative">
        <img 
          src="https://images.unsplash.com/photo-1582672097782-5f506c47ec86?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover" 
          alt="Pakistan Map" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass p-6 rounded-3xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center">
                <MapPin className="text-dark-900" />
              </div>
              <div>
                <p className="font-bold">HyrEstate HQ</p>
                <p className="text-xs text-gray-500">Karachi, Pakistan</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

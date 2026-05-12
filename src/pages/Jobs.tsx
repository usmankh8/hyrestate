import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, DollarSign, Filter, ChevronDown, ArrowUpRight, Building2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Job } from '@/src/types';
import { cn } from '@/src/lib/utils';

export function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Off-Plan', 'Admin', 'Investment'];

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Luxury Property Consultant',
      company: 'Zameen.com',
      location: 'Karachi, Pakistan',
      salary: '85k - 100k PKR + High Comm',
      type: 'Full-time',
      category: 'Residential',
      description: 'Join Pakistan\'s largest portal representation. English proficiency and sharp sales skills required.',
      postedAt: '2 days ago',
    },
    {
      id: '2',
      title: 'Senior Off-Plan Broker',
      company: 'Graana',
      location: 'Gulberg, Lahore',
      salary: '100k - 120k PKR',
      type: 'Full-time',
      category: 'Off-Plan',
      description: 'Specialized role for investor relations and off-plan portfolio management in Lahore.',
      postedAt: 'Today',
    },
    {
      id: '3',
      title: 'Real Estate Sales Coordinator',
      company: 'Bahria Town',
      location: 'Islamabad',
      salary: '60k - 80k PKR',
      type: 'Full-time',
      category: 'Admin',
      description: 'Supportive role coordinating between clients and senior brokers for elite villa listings in Bahria Town.',
      postedAt: '4 days ago',
    },
    {
      id: '4',
      title: 'Commercial Leasing Manager',
      company: 'Agency21',
      location: 'E-11, Islamabad',
      salary: '90k - 110k PKR',
      type: 'Full-time',
      category: 'Commercial',
      description: 'Focus on high-profile retail spaces and corporate office leasing across Islamabad.',
      postedAt: '1 week ago',
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-dark-900 min-h-screen pb-20">
      {/* Header */}
      <section className="pt-32 pb-12 bg-dark-950/50 border-b border-white/5">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold track-tighter mb-4">
             ELITE <span className="gold-text">OPPORTUNITIES</span>
          </h1>
          <p className="text-gray-500 font-medium">Find your dream career in the world's most dynamic real estate market.</p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-16 z-40 bg-dark-900/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search job titles, companies or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border',
                    selectedCategory === cat 
                      ? 'gold-gradient text-dark-900 border-transparent' 
                      : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="pt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-3xl p-6 hover:border-gold-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                          <Building2 className="text-gold-500 w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-gold-500 transition-colors">{job.title}</h3>
                          <p className="text-gray-500 text-sm font-semibold">{job.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 text-xs font-bold border border-gold-500/20">
                          {job.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{job.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-white/5">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MapPin className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <DollarSign className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-medium">{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Briefcase className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <div className="w-4 h-4 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                        </div>
                        <span className="text-xs font-medium">{job.postedAt}</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                         <Star className="w-3 h-3 text-gold-500 fill-current mr-1" />
                         Premium Listing
                      </div>
                      <Link 
                        to="/apply"
                        className="px-6 py-2 rounded-full gold-gradient text-dark-900 font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        Quick Apply <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Sidebar widgets */}
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 gold-gradient opacity-10 blur-3xl rounded-full"></div>
                <h4 className="text-lg font-bold mb-4">Job Alert</h4>
                <p className="text-gray-500 text-sm mb-6 font-medium">Get notified immediately when new luxury roles open in your area.</p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm mb-4 focus:outline-none focus:border-gold-500"
                />
                <button className="w-full py-3 rounded-xl gold-gradient text-dark-900 font-bold text-sm tracking-wide">
                  SUBSCRIBE
                </button>
              </div>

              <div className="glass rounded-3xl p-8">
                <h4 className="text-lg font-bold mb-6">Pakistan Career Guide</h4>
                <div className="space-y-6">
                  {[
                    'Working in Karachi: Essential Guide',
                    'How to get a Real Estate License in PK',
                    'Understanding commission splits',
                    'Best residential areas for agents',
                  ].map((guide, i) => (
                    <div key={i} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-dark-900 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{guide}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

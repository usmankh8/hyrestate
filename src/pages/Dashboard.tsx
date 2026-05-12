import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  Plus
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Application } from '@/src/types';

const data = [
  { name: 'Jan', apps: 40, hires: 24 },
  { name: 'Feb', apps: 30, hires: 13 },
  { name: 'Mar', apps: 20, hires: 9 },
  { name: 'Apr', apps: 27, hires: 39 },
  { name: 'May', apps: 18, hires: 48 },
  { name: 'Jun', apps: 23, hires: 38 },
];

const revenueData = [
  { day: 'Mon', value: 4000 },
  { day: 'Tue', value: 3000 },
  { day: 'Wed', value: 2000 },
  { day: 'Thu', value: 2780 },
  { day: 'Fri', value: 1890 },
  { day: 'Sat', value: 2390 },
  { day: 'Sun', value: 3490 },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Jobs', value: '0', change: '0%', icon: Briefcase, color: 'text-gold-500' },
    { title: 'New Applications', value: '0', change: '0%', icon: Users, color: 'text-blue-500' },
    { title: 'Revenue Gen', value: '$0', change: '0%', icon: TrendingUp, color: 'text-green-500' },
    { title: 'Placement Rate', value: '0%', change: '0%', icon: CheckCircle2, color: 'text-purple-500' },
  ];

  const [applications, setApplications] = useState<Application[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newApplicantName, setNewApplicantName] = useState('');

  const handleStatusChange = (id: string, newStatus: Application['status']) => {
    setApplications(apps => apps.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const handleAddApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApplicantName.trim()) return;

    const newApp: Application = {
      id: Math.random().toString(36).substr(2, 9),
      jobId: '1',
      applicantName: newApplicantName,
      status: 'Pending',
      date: 'Just now'
    };

    setApplications([newApp, ...applications]);
    setNewApplicantName('');
    setIsAddModalOpen(false);
  };

  const statusIcons = {
    Pending: <Clock className="w-3 h-3 text-yellow-500" />,
    Interviewing: <TrendingUp className="w-3 h-3 text-blue-500" />,
    Accepted: <CheckCircle2 className="w-3 h-3 text-green-500" />,
    Rejected: <XCircle className="w-3 h-3 text-red-500" />,
  };

  const statusColors = {
    Pending: 'bg-yellow-500/10 text-yellow-500',
    Interviewing: 'bg-blue-500/10 text-blue-500',
    Accepted: 'bg-green-500/10 text-green-500',
    Rejected: 'bg-red-500/10 text-red-500',
  };

  return (
    <div className="min-h-screen bg-dark-900 flex">
      {/* Sidebar */}
      <aside className="w-64 glass-dark border-r border-white/5 h-screen sticky top-0 hidden lg:flex flex-col p-6 overflow-y-auto">
        <div className="mb-10">
           <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded gold-gradient flex items-center justify-center">
              <LogOut className="text-dark-900 w-5 h-5 rotate-180" />
            </div>
            <span className="text-xl font-display font-bold">HyrEstate</span>
          </Link>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { id: 'overview', name: 'Overview', icon: BarChart3 },
            { id: 'jobs', name: 'Job Manager', icon: Briefcase },
            { id: 'users', name: 'User Management', icon: Users },
            { id: 'wallet', name: 'Wallet', icon: TrendingUp },
            { id: 'analytics', name: 'Analytics', icon: TrendingUp },
            { id: 'settings', name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium text-sm',
                activeTab === item.id 
                  ? 'bg-gold-500/10 text-gold-500 border border-gold-500/20' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/5">
          <div className="glass p-4 rounded-2xl mb-4">
             <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2">Current Plan</p>
             <p className="text-sm font-bold text-gold-500 mb-1">PRO ENTERPRISE</p>
             <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="w-3/4 h-full gold-gradient"></div>
             </div>
          </div>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/5 transition-all font-medium text-sm">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold">Welcome back, Admin</h2>
            <p className="text-gray-500 text-sm font-medium">Here's what happening with HyrEstate today.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Universal search..." 
                  className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500/50"
                />
             </div>
             <button className="w-10 h-10 glass rounded-xl flex items-center justify-center relative">
               <Bell className="w-5 h-5 text-gray-400" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
             </button>
             <div className="w-10 h-10 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=admin" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Tabs Content */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-3xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn('p-3 rounded-2xl bg-white/5', stat.color)}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full uppercase">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <div className="absolute top-0 right-0 w-20 h-20 gold-gradient opacity-[0.03] blur-3xl rounded-full"></div>
                </motion.div>
              ))}
            </div>

            {/* Charts & Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-2 glass rounded-[32px] p-8">
                <div className="flex items-center justify-between mb-8">
                   <h4 className="font-display font-bold text-xl uppercase tracking-tighter">Application Trends</h4>
                   <select className="bg-white/5 border border-white/10 rounded-lg text-xs p-2 font-bold outline-none">
                     <option>Last 6 Months</option>
                     <option>Last 12 Months</option>
                   </select>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}}
                        itemStyle={{color: '#D4AF37'}}
                      />
                      <Area type="monotone" dataKey="apps" stroke="#D4AF37" fillOpacity={1} fill="url(#colorApps)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="glass rounded-[32px] p-8 flex flex-col">
                 <h4 className="font-display font-bold text-xl uppercase tracking-tighter mb-8">Revenue Stream</h4>
                 <div className="flex-grow flex items-end justify-between gap-2">
                    {revenueData.map((d, i) => (
                      <div key={i} className="flex flex-col items-center flex-grow group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${(d.value / 4000) * 160}px` }}
                          className="w-full rounded-t-lg bg-white/5 group-hover:gold-gradient transition-all cursor-pointer relative"
                        >
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-dark-900 text-[10px] font-bold px-2 py-1 rounded">
                             ${d.value}
                           </div>
                        </motion.div>
                        <span className="text-[10px] text-gray-600 font-bold mt-4">{d.day}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-gray-500 text-xs font-medium">Target Progress</span>
                       <span className="text-gold-500 text-xs font-bold">78%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                       <div className="w-[78%] h-full gold-gradient"></div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Applications List */}
            <div className="glass rounded-[32px] p-8">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-display font-bold text-xl uppercase tracking-tighter">Recent Applications</h4>
                <button 
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 rounded-xl gold-gradient text-dark-900 font-bold text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Application
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-500 text-[10px] uppercase tracking-widest font-bold border-b border-white/5">
                      <th className="pb-4 px-4 font-bold">Applicant Name</th>
                      <th className="pb-4 px-4 font-bold">Job Role</th>
                      <th className="pb-4 px-4 font-bold">Status</th>
                      <th className="pb-4 px-4 font-bold">Date Applied</th>
                      <th className="pb-4 px-4 text-right font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {applications.map((app) => (
                      <tr key={app.id} className="group hover:bg-white/5 transition-colors">
                        <td className="py-5 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center font-bold text-[10px]">
                               {app.applicantName.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-sm font-semibold">{app.applicantName}</span>
                          </div>
                        </td>
                        <td className="py-5 px-4 text-sm font-medium text-gray-400">Luxury Specialist</td>
                        <td className="py-5 px-4">
                          <span className={cn('px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 w-fit', statusColors[app.status])}>
                            {statusIcons[app.status]}
                            {app.status}
                          </span>
                        </td>
                        <td className="py-5 px-4 text-sm text-gray-500 font-medium">{app.date}</td>
                        <td className="py-5 px-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button 
                              onClick={() => handleStatusChange(app.id, 'Accepted')}
                              className="px-3 py-1 rounded-lg bg-green-500/10 text-green-500 text-[10px] font-bold hover:bg-green-500 hover:text-white transition-all"
                            >
                              APPROVE
                            </button>
                            <button 
                              onClick={() => handleStatusChange(app.id, 'Rejected')}
                              className="px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-[10px] font-bold hover:bg-red-500 hover:text-white transition-all"
                            >
                              DENY
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'wallet' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-10 rounded-[40px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Total Balance</h3>
                  <div className="text-5xl font-display font-bold track-tighter mb-8">$0.00</div>
                  <div className="flex gap-4">
                     <button className="flex-1 py-4 rounded-2xl gold-gradient text-dark-900 font-bold text-sm tracking-wide">WITHDRAW</button>
                     <button className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wide">DEPOSIT</button>
                  </div>
               </div>
               
               <div className="glass p-10 rounded-[40px] bg-gold-500/5 border-gold-500/20">
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Payment Methods</h3>
                  <div className="space-y-4">
                     {['Binance Pay (USDT)', 'Bitcoin (BTC)', 'Bank Transfer (PK)'].map((method) => (
                       <div key={method} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all cursor-pointer">
                          <span className="text-sm font-bold">{method}</span>
                          <div className="w-5 h-5 rounded-full border border-gold-500/50 flex items-center justify-center">
                             <div className="w-2.5 h-2.5 rounded-full bg-gold-500"></div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="glass rounded-[32px] p-8">
               <h4 className="font-display font-bold text-xl uppercase tracking-tighter mb-8">Recent Transactions</h4>
               <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                     <Clock className="text-gray-600 w-8 h-8" />
                  </div>
                  <p className="text-gray-500 font-medium">No transactions yet.</p>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab !== 'overview' && activeTab !== 'wallet' && (
          <div className="flex items-center justify-center h-[60vh]">
             <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                   <Settings className="text-gray-700 w-10 h-10 animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Module is under development</h3>
                <p className="text-gray-500">This section will be available soon with standard database integration.</p>
             </div>
          </div>
        )}
      </main>

      {/* Add Application Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass w-full max-w-md p-8 md:p-10 relative z-10 border border-white/10"
          >
            <h3 className="text-2xl font-display font-bold mb-6">New Application</h3>
            <form onSubmit={handleAddApplication} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Applicant Full Name</label>
                <input 
                  type="text" 
                  value={newApplicantName}
                  onChange={(e) => setNewApplicantName(e.target.value)}
                  placeholder="e.g. John Doe" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-gray-700 font-medium"
                />
              </div>
              
              <div className="pt-4 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-4 rounded-2xl gold-gradient text-dark-900 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Add Applicant
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

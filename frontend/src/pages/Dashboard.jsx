import React from 'react';
import { motion } from 'framer-motion';
import { Download, Key, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Dashboard = () => {
  const subscriptionInfo = {
    plan: 'Elite',
    status: 'Active',
    expiryDate: 'Dec 31, 2026',
    licenseKey: 'METAS-XXXX-XXXX-XXXX-XXXX'
  };

  const downloads = [
    { platform: 'Windows', version: '5.2.1', size: '124 MB', date: 'Jan 15, 2026' },
    { platform: 'macOS', version: '5.2.1', size: '118 MB', date: 'Jan 15, 2026' },
    { platform: 'Linux', version: '5.2.1', size: '126 MB', date: 'Jan 15, 2026' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 pr-8">
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-3 bg-[#7C3AED]/20 border border-[#7C3AED] rounded-lg text-white font-medium">
                Dashboard
              </a>
              <a href="#" className="block px-4 py-3 text-[#9CA3AF] hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Account Settings
              </a>
              <a href="#" className="block px-4 py-3 text-[#9CA3AF] hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Billing
              </a>
              <a href="#" className="block px-4 py-3 text-[#9CA3AF] hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Support
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Subscription Card */}
              <AnimatedSection>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center">
                      <Key className="text-[#7C3AED]" size={20} />
                    </div>
                    <h3 className="font-semibold">Subscription</h3>
                  </div>
                  <p className="text-3xl font-bold mb-2">{subscriptionInfo.plan}</p>
                  <p className="text-sm text-[#00D4FF]">{subscriptionInfo.status}</p>
                </div>
              </AnimatedSection>

              {/* Expiry Card */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center">
                      <Calendar className="text-[#00D4FF]" size={20} />
                    </div>
                    <h3 className="font-semibold">Expires On</h3>
                  </div>
                  <p className="text-2xl font-bold">{subscriptionInfo.expiryDate}</p>
                </div>
              </AnimatedSection>

              {/* License Card */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-4">License Key</h3>
                  <p className="text-sm text-[#9CA3AF] font-mono break-all">{subscriptionInfo.licenseKey}</p>
                  <button className="mt-4 text-[#00D4FF] text-sm hover:underline">Copy Key</button>
                </div>
              </AnimatedSection>
            </div>

            {/* Downloads Table */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-2xl font-bold">Downloads</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-sm font-semibold text-[#9CA3AF]">Platform</th>
                        <th className="text-left p-4 text-sm font-semibold text-[#9CA3AF]">Version</th>
                        <th className="text-left p-4 text-sm font-semibold text-[#9CA3AF]">Size</th>
                        <th className="text-left p-4 text-sm font-semibold text-[#9CA3AF]">Release Date</th>
                        <th className="text-left p-4 text-sm font-semibold text-[#9CA3AF]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {downloads.map((download, index) => (
                        <tr key={index} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                          <td className="p-4 font-medium">{download.platform}</td>
                          <td className="p-4 text-[#9CA3AF]">{download.version}</td>
                          <td className="p-4 text-[#9CA3AF]">{download.size}</td>
                          <td className="p-4 text-[#9CA3AF]">{download.date}</td>
                          <td className="p-4">
                            <button className="flex items-center gap-2 text-[#00D4FF] hover:underline">
                              <Download size={16} />
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

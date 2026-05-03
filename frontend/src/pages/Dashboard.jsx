import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Package, Key, TrendingUp, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { dashboardAPI, downloadAPI } from '../services/api';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await dashboardAPI.getStats();
      setStats(response.data);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (type) => {
    setDownloading(type);
    try {
      const response = type === 'indicator' 
        ? await downloadAPI.downloadIndicator()
        : await downloadAPI.downloadAlgorithm();
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `MT5_Premium_${type === 'indicator' ? 'Indicator' : 'Algorithm'}.ex5`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      fetchDashboardStats();
    } catch (err) {
      alert(err.response?.data?.detail || `Failed to download ${type}`);
    } finally {
      setDownloading(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] pt-24">
        <motion.div
          className="w-16 h-16 border-4 border-[#7C3AED] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  const canDownloadIndicator = stats?.subscription?.plan === 'indicator' || stats?.subscription?.plan === 'bundle';
  const canDownloadAlgorithm = stats?.subscription?.plan === 'algorithm' || stats?.subscription?.plan === 'bundle';

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.full_name}!</h1>
          <p className="text-[#9CA3AF]">Manage your MT5 trading tools</p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 flex items-center gap-3"
          >
            <AlertCircle className="text-red-500" size={20} />
            <span className="text-red-500">{error}</span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center">
                <Package className="text-[#7C3AED]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#9CA3AF]">Subscription</p>
                <p className="text-2xl font-bold capitalize">{stats?.subscription?.plan || 'None'}</p>
              </div>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm ${
              stats?.subscription?.status === 'active' 
                ? 'bg-green-500/20 text-green-500'
                : 'bg-gray-500/20 text-gray-500'
            }`}>
              {stats?.subscription?.status || 'Inactive'}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center">
                <Download className="text-[#00D4FF]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#9CA3AF]">Total Downloads</p>
                <p className="text-2xl font-bold">{stats?.downloads?.total || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#ec4899]/20 rounded-lg flex items-center justify-center">
                <Key className="text-[#ec4899]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#9CA3AF]">Active Licenses</p>
                <p className="text-2xl font-bold">{stats?.licenses?.active || 0}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-[#7C3AED]" size={32} />
              <div>
                <h3 className="text-2xl font-bold">MT5 Premium Indicator</h3>
                <p className="text-[#9CA3AF]">Professional order flow analysis</p>
              </div>
            </div>

            {canDownloadIndicator ? (
              <motion.button
                onClick={() => handleDownload('indicator')}
                disabled={downloading === 'indicator'}
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {downloading === 'indicator' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={20} /> Download Indicator
                  </>
                )}
              </motion.button>
            ) : (
              <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 text-yellow-500 text-center">
                Subscription required to download
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-[#ec4899]" size={32} />
              <div>
                <h3 className="text-2xl font-bold">MT5 Premium Algorithm</h3>
                <p className="text-[#9CA3AF]">Automated trading system</p>
              </div>
            </div>

            {canDownloadAlgorithm ? (
              <motion.button
                onClick={() => handleDownload('algorithm')}
                disabled={downloading === 'algorithm'}
                className="w-full bg-gradient-to-r from-[#ec4899] to-[#7C3AED] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {downloading === 'algorithm' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={20} /> Download Algorithm
                  </>
                )}
              </motion.button>
            ) : (
              <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 text-yellow-500 text-center">
                Subscription required to download
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

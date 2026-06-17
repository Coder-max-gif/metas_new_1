import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Package, Key, TrendingUp, AlertCircle, Shield, ArrowRight, Edit2, Check, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { dashboardAPI, downloadAPI, paymentsAPI, adminAPI } from '../services/api';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);
  const [editingDownloads, setEditingDownloads] = useState(false);
  const [editingLicenses, setEditingLicenses] = useState(false);
  const [downloadsValue, setDownloadsValue] = useState(0);
  const [licensesValue, setLicensesValue] = useState(0);
  const [updatingStats, setUpdatingStats] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, paymentsRes] = await Promise.allSettled([
        dashboardAPI.getStats(),
        paymentsAPI.getMyPayments()
      ]);
      
      if (statsRes.status === 'fulfilled') {
        setStats(statsRes.value.data);
        setDownloadsValue(statsRes.value.data?.downloads?.total || 0);
        setLicensesValue(statsRes.value.data?.licenses?.active || 0);
      }
      if (paymentsRes.status === 'fulfilled') {
        setPayments(paymentsRes.value.data);
      }
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
      
      fetchData();
    } catch (err) {
      alert(err.response?.data?.detail || `Failed to download ${type}`);
    } finally {
      setDownloading(null);
    }
  };

  const handleUpdateStats = async (type) => {
    setUpdatingStats(true);
    try {
      await adminAPI.updateStats({
        downloads_total: type === 'downloads' ? parseInt(downloadsValue) : stats?.downloads?.total,
        licenses_active: type === 'licenses' ? parseInt(licensesValue) : stats?.licenses?.active,
      });
      setEditingDownloads(false);
      setEditingLicenses(false);
      fetchData();
    } catch (err) {
      alert('Failed to update stats');
    } finally {
      setUpdatingStats(false);
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

  const canDownloadIndicator = false;
  const canDownloadAlgorithm = false;

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">Welcome back, {user?.full_name}!</h1>
            {user?.role === 'admin' && (
              <motion.button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield size={20} />
                Admin Dashboard
              </motion.button>
            )}
          </div>
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
                <p className="text-2xl font-bold capitalize">{user?.subscription_type || 'None'}</p>
              </div>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm ${
              user?.subscription_status === 'active' 
                ? 'bg-green-500/20 text-green-500'
                : 'bg-gray-500/20 text-gray-500'
            }`}>
              {user?.subscription_status || 'Inactive'}
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
              <div className="flex-1">
                <p className="text-sm text-[#9CA3AF]">Total Downloads</p>
                {editingDownloads ? (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="number"
                      value={downloadsValue}
                      onChange={(e) => setDownloadsValue(e.target.value)}
                      className="w-24 bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-2xl font-bold"
                    />
                    <button
                      onClick={() => handleUpdateStats('downloads')}
                      disabled={updatingStats}
                      className="p-1 hover:bg-green-500/20 rounded"
                    >
                      <Check size={20} className="text-green-500" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingDownloads(false);
                        setDownloadsValue(stats?.downloads?.total || 0);
                      }}
                      className="p-1 hover:bg-red-500/20 rounded"
                    >
                      <X size={20} className="text-red-500" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{stats?.downloads?.total || 0}</p>
                    {user?.role === 'admin' && (
                      <button
                        onClick={() => setEditingDownloads(true)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <Edit2 size={16} className="text-[#9CA3AF]" />
                      </button>
                    )}
                  </div>
                )}
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
              <div className="flex-1">
                <p className="text-sm text-[#9CA3AF]">Active Licenses</p>
                {editingLicenses ? (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="number"
                      value={licensesValue}
                      onChange={(e) => setLicensesValue(e.target.value)}
                      className="w-24 bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-2xl font-bold"
                    />
                    <button
                      onClick={() => handleUpdateStats('licenses')}
                      disabled={updatingStats}
                      className="p-1 hover:bg-green-500/20 rounded"
                    >
                      <Check size={20} className="text-green-500" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingLicenses(false);
                        setLicensesValue(stats?.licenses?.active || 0);
                      }}
                      className="p-1 hover:bg-red-500/20 rounded"
                    >
                      <X size={20} className="text-red-500" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{stats?.licenses?.active || 0}</p>
                    {user?.role === 'admin' && (
                      <button
                        onClick={() => setEditingLicenses(true)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <Edit2 size={16} className="text-[#9CA3AF]" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
              <div className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 text-yellow-500 text-center">
                  Subscription required to download
                </div>
                <motion.button
                  onClick={() => navigate('/pricing')}
                  className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Pricing <ArrowRight size={20} />
                </motion.button>
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
              <div className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4 text-yellow-500 text-center">
                  Subscription required to download
                </div>
                <motion.button
                  onClick={() => navigate('/pricing')}
                  className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Pricing <ArrowRight size={20} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {payments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Payment History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#9CA3AF] font-semibold pb-4">Product</th>
                    <th className="text-left text-[#9CA3AF] font-semibold pb-4">Amount</th>
                    <th className="text-left text-[#9CA3AF] font-semibold pb-4">Date</th>
                    <th className="text-left text-[#9CA3AF] font-semibold pb-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id} className="border-b border-white/5">
                      <td className="py-4">{payment.product_id}</td>
                      <td className="py-4">${payment.amount}</td>
                      <td className="py-4 text-[#9CA3AF]">
                        {new Date(payment.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          payment.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                          payment.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, CreditCard, CheckCircle, XCircle, ArrowLeft, X, MessageSquare, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { adminAPI } from '../services/api';
import AnimatedSection from '../components/AnimatedSection';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('payments');
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  const getScreenshotUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const cleanPath = path.replace(/\\/g, '/');
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `${BACKEND_URL}${normalizedPath}`;
  };

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/dashboard');
      return;
    }
    loadData();
  }, [user]);

  const loadData = async () => {
    try {
      const [usersRes, paymentsRes, contactsRes] = await Promise.all([
        adminAPI.getAllUsers(),
        adminAPI.getAllPayments(),
        adminAPI.getAllContacts()
      ]);
      setUsers(usersRes.data);
      setPayments(paymentsRes.data);
      setContacts(contactsRes.data);
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (paymentId) => {
    try {
      await adminAPI.approvePayment(paymentId);
      loadData();
    } catch (err) {
      console.error('Error approving payment:', err);
    }
  };

  const handleReject = async (paymentId) => {
    try {
      await adminAPI.rejectPayment(paymentId);
      loadData();
    } catch (err) {
      console.error('Error rejecting payment:', err);
    }
  };

  const handleResolveContact = async (contactId) => {
    try {
      await adminAPI.resolveContact(contactId);
      loadData();
    } catch (err) {
      console.error('Error resolving contact message:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#7C3AED]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-8 max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
        </div>

        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-[#9CA3AF] mb-8">Manage users, payments and contact inquiries</p>
        </AnimatedSection>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('payments')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'payments'
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white'
                : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
            }`}
          >
            <CreditCard size={20} />
            Payments ({payments.length})
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'users'
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white'
                : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
            }`}
          >
            <Users size={20} />
            Users ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'contacts'
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white'
                : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
            }`}
          >
            <MessageSquare size={20} />
            Messages ({contacts.length})
          </button>
        </div>

        <AnimatedSection delay={0.1}>
          {activeTab === 'payments' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">User</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Product</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Amount</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Account Number</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Transaction ID</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Screenshot</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Status</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => {
                      const user = users.find(u => u.id === payment.user_id);
                      const ssUrl = getScreenshotUrl(payment.screenshot_url);
                      return (
                        <tr key={payment.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">{user?.full_name || 'Unknown'}</td>
                          <td className="px-6 py-4">{payment.product_id}</td>
                          <td className="px-6 py-4">${payment.amount}</td>
                          <td className="px-6 py-4 font-mono text-sm">{payment.account_number || 'N/A'}</td>
                          <td className="px-6 py-4 font-mono text-sm">{payment.transaction_id}</td>
                          <td className="px-6 py-4">
                            {ssUrl ? (
                              <button
                                onClick={() => setSelectedScreenshot(ssUrl)}
                                className="text-[#00D4FF] hover:underline flex items-center gap-1 font-semibold"
                              >
                                View Proof
                              </button>
                            ) : (
                              <span className="text-[#9CA3AF]/50">No upload</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              payment.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                              payment.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {payment.status === 'pending' && (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleApprove(payment.id)}
                                  className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                                >
                                  <CheckCircle size={16} />
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleReject(payment.id)}
                                  className="flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                                >
                                  <XCircle size={16} />
                                  Reject
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Name</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Email</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Role</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Subscription</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Status</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">{user.full_name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            user.role === 'admin' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">{user.subscription_type}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            user.subscription_status === 'active' ? 'bg-green-500/20 text-green-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {user.subscription_status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[#9CA3AF]">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Date</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Name</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Email</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Subject</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Message</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Status</th>
                      <th className="text-left px-6 py-4 text-[#9CA3AF] font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-[#9CA3AF] text-sm whitespace-nowrap">
                          {new Date(contact.created_at).toLocaleDateString()} {new Date(contact.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </td>
                        <td className="px-6 py-4 font-semibold whitespace-nowrap">{contact.name}</td>
                        <td className="px-6 py-4 text-[#00D4FF] hover:underline whitespace-nowrap">
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </td>
                        <td className="px-6 py-4 truncate max-w-[150px]">{contact.subject}</td>
                        <td className="px-6 py-4 max-w-[200px]">
                          <button
                            onClick={() => setSelectedMessage(contact)}
                            className="text-[#9CA3AF] hover:text-white transition-colors text-left truncate block w-full"
                          >
                            {contact.message}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            contact.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {contact.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {contact.status === 'new' && (
                            <button
                              onClick={() => handleResolveContact(contact.id)}
                              className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm whitespace-nowrap"
                            >
                              <CheckCircle size={14} />
                              Resolve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                    {contacts.length === 0 && (
                      <tr>
                        <td colSpan="7" className="text-center py-8 text-[#9CA3AF]">
                          No contact messages found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </AnimatedSection>
      </section>

      {/* Screenshot Viewer Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
              <img
                src={selectedScreenshot}
                alt="Payment Proof"
                className="max-w-full max-h-[80vh] rounded-lg object-contain"
                onError={(e) => {
                  e.target.src = '';
                  e.target.onerror = null;
                  alert('Failed to load image. Make sure the backend server is running and static files are hosted.');
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Message Details Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMessage(null)}
                className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-white rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-[#7C3AED]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Contact Inquiry</h3>
                  <p className="text-sm text-[#9CA3AF]">Submitted on {new Date(selectedMessage.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">From</label>
                  <p className="text-white text-lg font-medium">{selectedMessage.name} (<a href={`mailto:${selectedMessage.email}`} className="text-[#00D4FF] hover:underline">{selectedMessage.email}</a>)</p>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">Subject</label>
                  <p className="text-white text-lg font-semibold">{selectedMessage.subject}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">Message</label>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-[#E5E7EB] whitespace-pre-wrap max-h-[250px] overflow-y-auto leading-relaxed">
                    {selectedMessage.message}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-6">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedMessage.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      Status: {selectedMessage.status}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {selectedMessage.status === 'new' && (
                      <button
                        onClick={() => {
                          handleResolveContact(selectedMessage.id);
                          setSelectedMessage(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                      >
                        <CheckCircle size={18} />
                        Mark as Resolved
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;

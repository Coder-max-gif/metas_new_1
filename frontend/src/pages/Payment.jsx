import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle, Upload, QrCode } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { paymentsAPI } from '../services/api';
import AnimatedSection from '../components/AnimatedSection';

const PRODUCTS = [
  {id: 'ind-tma', name: 'SNIPER BAND X', price: 49, period: '6 months'},
  {id: 'ind-bs-numbers', name: 'PULSE X-RAY', price: 49, period: '6 months'},
  {id: 'ind-future-pattern', name: 'DEJA VU AI', price: 49, period: '6 months'},
  {id: 'ind-session', name: 'THE 24H MATRIX', price: 49, period: '6 months'},
  {id: 'all-indicators', name: 'All Indicators (Bundle)', price: 99, period: '6 months'},
  {id: 'algo-premium', name: 'Premium Algorithm', price: 99, period: '1 month'}
];

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const [formData, setFormData] = useState({ transactionId: '', accountNumber: '', screenshot: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      const product = PRODUCTS.find(p => p.id === productId);
      setSelectedProduct(product);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!agreed) {
      setError('Please agree to the Terms of Service');
      return;
    }

    if (!formData.accountNumber) {
      setError('Please enter your trading account number');
      return;
    }

    if (!formData.transactionId) {
      setError('Please enter transaction ID');
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('product_id', selectedProduct.id);
      formDataToSend.append('transaction_id', formData.transactionId);
      formDataToSend.append('account_number', formData.accountNumber);
      if (formData.screenshot) {
        formDataToSend.append('screenshot', formData.screenshot);
      }

      await paymentsAPI.createPayment(formDataToSend);
      setIsSubmittedSuccessfully(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Payment submission failed');
    } finally {
      setLoading(false);
    }
  };

  if (!selectedProduct) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-[#9CA3AF]">No product selected</p>
          <button onClick={() => navigate('/pricing')} className="mt-4 text-[#7C3AED] hover:text-[#00D4FF]">
            Go back to pricing
          </button>
        </div>
      </div>
    );
  }

  if (isSubmittedSuccessfully) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]">
        <div className="relative max-w-lg w-full mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl text-center">
              <div className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AlertCircle size={40} className="text-yellow-500" />
                </motion.div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Payment Confirmation Pending</h2>
              <p className="text-lg text-[#9CA3AF] mb-6">
                Your payment transaction of <span className="text-white font-bold">${selectedProduct.price}</span> for <span className="text-[#00D4FF] font-semibold">{selectedProduct.name}</span> has been submitted.
              </p>
              <p className="text-[#9CA3AF] text-sm mb-8 leading-relaxed">
                The administrator is verifying your transaction details and screenshot. This process typically takes a few hours. Once approved, your premium features will be unlocked immediately.
              </p>
              <motion.button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Go to Dashboard
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-12 max-w-4xl mx-auto px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8 text-center">Complete Your Purchase</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">{selectedProduct.name}</span>
                  <span className="text-xl font-bold">${selectedProduct.price}</span>
                </div>
                <div className="flex justify-between items-center text-[#9CA3AF]">
                  <span>Duration</span>
                  <span>{selectedProduct.period}</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-[#00D4FF]">${selectedProduct.price}</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Payment Instructions</h3>
                <div className="bg-white/5 rounded-lg p-6 flex flex-col items-center justify-center overflow-hidden gap-4">
                  <img src="/qr.png" alt="Payment QR code" className="w-full max-w-[260px] h-auto rounded-lg border border-white/10" />
                  <div className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-center">
                    <p className="text-sm text-[#9CA3AF] mb-2">Wallet Address</p>
                    <p className="break-all text-sm font-medium text-[#00D4FF]">TP1rWyN9VYLLfb9QeanmqxqTgM7Mm3eGU5</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 flex items-center gap-3"
                >
                  <AlertCircle className="text-red-500" size={20} />
                  <span className="text-red-500">{error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Trading Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                    placeholder="Enter your MT5 Account Number"
                    required
                    disabled={loading}
                  />
                  <p className="mt-1 text-xs text-[#9CA3AF]">This field is compulsory for subscription activation.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Transaction ID / Hash <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                    placeholder="Enter transaction ID"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Payment Screenshot (Optional)</label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-[#9CA3AF]" />
                      <p className="text-sm text-[#9CA3AF]">Click to upload screenshot</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, screenshot: e.target.files[0] })}
                      disabled={loading}
                    />
                  </label>
                  {formData.screenshot && (
                    <p className="mt-2 text-sm text-[#00D4FF]">Selected: {formData.screenshot.name}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="payment-terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5"
                    disabled={loading}
                  />
                  <label htmlFor="payment-terms" className="text-sm text-[#9CA3AF]">
                    I agree to the <Link to="/terms" target="_blank" className="text-[#7C3AED] hover:text-[#00D4FF] underline">Terms of Service</Link> and confirm the payment
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Payment <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Payment;

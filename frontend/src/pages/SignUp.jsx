import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!agreed) {
      setError('Please agree to the Terms of Service');
      return;
    }

    setLoading(true);

    const result = await register(formData.fullName, formData.email, formData.password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const benefits = [
    'Access to all trading features',
    '14-day free trial included',
    'No credit card required',
    'Cancel anytime'
  ];

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
      
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00D4FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <h1 className="text-5xl font-bold mb-6">
              Start Trading
              <br />
              <span className="text-[#7C3AED]">Smarter Today</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] mb-8">
              Join thousands of traders who trust Metas for professional order flow and volume analysis
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7C3AED]/20 rounded-full flex items-center justify-center">
                    <Check className="text-[#7C3AED]" size={18} />
                  </div>
                  <span className="text-lg text-[#E5E7EB]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-[#9CA3AF] mb-8">
                Already have an account?{' '}
                <Link to="/login" className="text-[#7C3AED] hover:text-[#00D4FF] transition-colors">
                  Sign In
                </Link>
              </p>

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
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                      placeholder="John Doe"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                      placeholder="you@example.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                      placeholder="••••••••"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#7C3AED] transition-colors text-white"
                      placeholder="••••••••"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5"
                    disabled={loading}
                  />
                  <label htmlFor="terms" className="text-sm text-[#9CA3AF]">
                    I agree to the Terms of Service and Privacy Policy
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
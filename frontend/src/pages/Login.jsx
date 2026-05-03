import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
      
      <div className="relative z-10 max-w-md mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
        >
          <h2 className="text-4xl font-bold mb-2 text-center">Welcome Back</h2>
          <p className="text-[#9CA3AF] mb-8 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#7C3AED] hover:text-[#00D4FF] transition-colors">
              Sign Up
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-[#9CA3AF]">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-[#7C3AED] hover:text-[#00D4FF]">
                Forgot password?
              </Link>
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
                  Signing In...
                </>
              ) : (
                <>
                  Sign In <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/api/auth/refresh`, {
            refresh_token: refreshToken,
          });

          const { access_token, refresh_token } = response.data;
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data) => api.post('/api/auth/register', data),
  login: (data) => api.post('/api/auth/login', data),
  logout: () => api.post('/api/auth/logout'),
  getCurrentUser: () => api.get('/api/auth/me'),
  forgotPassword: (email) => api.post('/api/auth/forgot-password', { email }),
};

export const dashboardAPI = {
  getStats: () => api.get('/api/dashboard/stats'),
};

export const downloadAPI = {
  listProducts: () => api.get('/api/downloads/products'),
  getHistory: (limit = 20) => api.get(`/api/downloads/history?limit=${limit}`),
  downloadIndicator: () => api.get('/api/downloads/indicator', { responseType: 'blob' }),
  downloadAlgorithm: () => api.get('/api/downloads/algorithm', { responseType: 'blob' }),
};

export const contactAPI = {
  submit: (data) => api.post('/api/contact/submit', data),
};

export const subscriptionAPI = {
  getMySubscription: () => api.get('/api/subscriptions/me'),
};

export const paymentsAPI = {
  getProducts: () => api.get('/api/payments/products'),
  createPayment: (formData) => api.post('/api/payments/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  getMyPayments: () => api.get('/api/payments/my-payments'),
};

export const adminAPI = {
  getAllUsers: () => api.get('/api/admin/users'),
  getAllPayments: () => api.get('/api/admin/payments'),
  approvePayment: (paymentId) => api.patch(`/api/admin/payments/${paymentId}/approve`),
  rejectPayment: (paymentId) => api.patch(`/api/admin/payments/${paymentId}/reject`),
  getAllContacts: () => api.get('/api/admin/contacts'),
  resolveContact: (contactId) => api.patch(`/api/admin/contacts/${contactId}/resolve`),
  updateStats: (data) => api.patch('/api/admin/stats', data),
};

export default api;
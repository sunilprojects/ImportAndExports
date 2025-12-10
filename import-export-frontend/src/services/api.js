import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
  getAllContacts: () => api.get('/contact'),
};

export const productAPI = {
  getAllProducts: () => api.get('/products'),
  getProductsByCategory: (category) => api.get(`/products/category/${category}`),
};

export const testimonialAPI = {
  getAllTestimonials: () => api.get('/testimonials'),
};

export default api;
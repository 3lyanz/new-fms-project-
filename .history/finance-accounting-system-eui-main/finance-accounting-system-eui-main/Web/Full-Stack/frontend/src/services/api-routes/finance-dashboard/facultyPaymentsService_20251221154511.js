import api from '../../services/api';

/**
 * Fetches payment data by faculty
 * @returns {Promise<Array>} List of faculty payment data
 */
export const getFacultyPayments = async () => {
  // TODO: Replace with actual API call when endpoint is available
  // const response = await api.get('/finance/payments/by-faculty');
  // return response.data;
  
  // Mock data - to be replaced with actual API call
  return [
    { name: 'Engineering', collected: 850000, total: 1000000, color: '#10b981' },
    { name: 'Computer Science', collected: 620000, total: 750000, color: '#fbbf24' },
    { name: 'Digital Arts', collected: 280000, total: 400000, color: '#3b82f6' },
    { name: 'Business Informatics', collected: 450000, total: 500000, color: '#10b981' }
  ];
};

export default {
  getFacultyPayments
};

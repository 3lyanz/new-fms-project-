import api from '../../services/api';

/**
 * Fetches recent payment transactions
 * @param {number} limit - Maximum number of payments to return
 * @returns {Promise<Array>} List of recent payment transactions
 */
export const getRecentPayments = async (limit = 5) => {
  // TODO: Replace with actual API call when endpoint is available
  // const response = await api.get(`/payments/recent?limit=${limit}`);
  // return response.data;
  
  // Mock data - to be replaced with actual API call
  return [
    { id: 'STD-001', name: 'John Smith', faculty: 'Engineering', amount: 2916, date: 'Dec 10, 2025', status: 'Paid' },
    { id: 'STD-002', name: 'Sarah Johnson', faculty: 'Computer Science', amount: 3125, date: 'Dec 10, 2025', status: 'Paid' },
    { id: 'STD-003', name: 'Michael Brown', faculty: 'Digital Arts', amount: 2500, date: 'Dec 9, 2025', status: 'Pending' },
    { id: 'STD-004', name: 'Emily Davis', faculty: 'Business', amount: 2750, date: 'Dec 9, 2025', status: 'Paid' },
    { id: 'STD-005', name: 'James Wilson', faculty: 'Engineering', amount: 2916, date: 'Dec 8, 2025', status: 'Failed' }
  ].slice(0, limit);
};

export default {
  getRecentPayments
};

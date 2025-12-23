import api from '../../services/api';

/**
 * Fetches dashboard summary data
 * @returns {Promise<Object>} Dashboard summary data
 */
export const getDashboardSummary = async () => {
  // TODO: Replace with actual API call when endpoint is available
  // const response = await api.get('/finance/dashboard/summary');
  // return response.data;
  
  // Mock data - to be replaced with actual API call
  return {
    totalCollected: 2400000,
    totalCollectedChange: 12.5,
    pendingPayments: 340000,
    pendingPaymentsChange: -8.2,
    totalStudents: 2847,
    totalStudentsChange: 5.3,
    unpaidStudents: 156,
    unpaidStudentsChange: -3.1
  };
};

export default {
  getDashboardSummary
};

import api from '../../services/api';

/**
 * Fetches detailed unpaid students report
 * @returns {Promise<Object>} Detailed report of unpaid students
 */
export const getUnpaidReport = async () => {
  try {
    const response = await api.get('/finance/unpaid-report');
    return response.data;
  } catch (error) {
    console.error('Error fetching unpaid report:', error);
    throw error;
  }
};

export default {
  getUnpaidReport
};

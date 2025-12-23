import api from '../../services/api';

/**
 * Fetches status report based on student dues
 * @param {Object} params - Query parameters
 * @param {number} [params.threshold] - Dues threshold for pass/fail status
 * @returns {Promise<Object>} Status report with pass/fail information
 */
export const getStatusReport = async (params = {}) => {
  try {
    const response = await api.get('/finance/reports/status', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching status report:', error);
    throw error;
  }
};

export default {
  getStatusReport
};

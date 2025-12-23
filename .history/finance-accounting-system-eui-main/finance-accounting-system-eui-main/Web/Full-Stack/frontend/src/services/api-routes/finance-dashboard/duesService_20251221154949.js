import api from '../../services/api';

/**
 * Fetches students with outstanding dues
 * @param {Object} filters - Optional filters for the query
 * @param {number} [filters.min_amount] - Minimum due amount
 * @param {number} [filters.max_amount] - Maximum due amount
 * @param {string} [filters.sort_by] - Field to sort by (e.g., 'dues_balance', 'username')
 * @returns {Promise<Object>} Object containing students with dues and summary
 */
export const getStudentDues = async (filters = {}) => {
  try {
    const response = await api.get('/finance/dues', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching student dues:', error);
    throw error;
  }
};

export default {
  getStudentDues
};

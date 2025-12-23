import api from '../../services/api';

/**
 * Fetches bank reconciliation data
 * @returns {Promise<Array>} List of bank transactions with reconciliation status
 */
export const getBankReconciliation = async () => {
  // TODO: Replace with actual API call when endpoint is available
  // const response = await api.get('/bank/reconciliation');
  // return response.data;
  
  // Mock data - to be replaced with actual API call
  return [
    { id: 1, amount: 5200, status: 'Matched', date: 'Today', statusColor: '#10b981' },
    { id: 2, amount: 3100, status: 'Pending', date: 'Yesterday', statusColor: '#fbbf24' },
    { id: 3, amount: 1850, status: 'Unmatched', date: 'Dec 8', statusColor: '#ef4444' },
    { id: 4, amount: 7400, status: 'Matched', date: 'Dec 7', statusColor: '#10b981' }
  ];
};

export default {
  getBankReconciliation
};

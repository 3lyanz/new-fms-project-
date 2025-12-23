import api from '../../services/api';

/**
 * Records an external payment
 * @param {Object} paymentData - Payment details
 * @param {number} paymentData.student_id - ID of the student making the payment
 * @param {number} paymentData.amount - Payment amount
 * @param {string} paymentData.payment_method - Method of payment (e.g., 'BANK_TRANSFER', 'CASH')
 * @param {string} [paymentData.reference_number] - Payment reference number
 * @param {string} [paymentData.notes] - Additional payment notes
 * @returns {Promise<Object>} Confirmation of the recorded payment
 */
export const recordExternalPayment = async (paymentData) => {
  try {
    const response = await api.post('/finance/record-payment', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error recording external payment:', error);
    throw error;
  }
};

export default {
  recordExternalPayment
};

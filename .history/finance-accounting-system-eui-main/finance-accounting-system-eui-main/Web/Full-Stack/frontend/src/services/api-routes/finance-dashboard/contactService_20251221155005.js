import api from '../../services/api';

/**
 * Logs a contact action for a student with outstanding dues
 * @param {number} studentId - ID of the student to contact
 * @param {Object} contactData - Contact details
 * @param {string} contactData.contact_method - Method of contact (e.g., 'EMAIL', 'PHONE')
 * @param {string} contactData.notes - Additional notes about the contact
 * @returns {Promise<Object>} Confirmation of the logged action
 */
export const logContactAction = async (studentId, contactData) => {
  try {
    const response = await api.put(`/finance/action/contact/${studentId}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error logging contact action:', error);
    throw error;
  }
};

export default {
  logContactAction
};

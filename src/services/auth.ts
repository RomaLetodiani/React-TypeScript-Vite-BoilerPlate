import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

// Example authentication service for handling user login
export const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
  // Additional authentication methods such as logout or token refresh can be added here
};

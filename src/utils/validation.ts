// Example function for validating email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Example function for validating a password
export const validatePassword = (password: string): boolean => {
  return password.length >= 8; // Password should be at least 8 characters long
};

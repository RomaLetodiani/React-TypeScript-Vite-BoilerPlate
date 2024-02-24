/**
 * Generates a random alphanumeric ID of specified length.
 * @param length The length of the generated ID. Default is 10.
 * @returns A random alphanumeric ID string.
 */
export const generateRandomId = (length: number = 10): string => {
  return Math.random().toString(36).substring(2, length);
};

/**
 * Formats a date using the specified format string.
 * @param format The format string specifying how the date should be formatted.
 * @param date The Date object to format.
 * @returns The formatted date string.
 */
export const formatDate = (format: string, date: Date): string => {
  return new Intl.DateTimeFormat(format).format(date);
};

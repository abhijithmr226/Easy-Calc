export const validateNumber = (value: string): string | null => {
  if (value.trim() === '') return 'Value is required';
  if (isNaN(Number(value))) return 'Must be a valid number';
  return null;
};

export const validateInteger = (value: string): string | null => {
  const numberError = validateNumber(value);
  if (numberError) return numberError;
  if (!Number.isInteger(Number(value))) return 'Must be an integer';
  return null;
};

export const validatePositive = (value: string): string | null => {
  const numberError = validateNumber(value);
  if (numberError) return numberError;
  if (Number(value) <= 0) return 'Must be positive';
  return null;
};
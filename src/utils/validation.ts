// utils/validation.ts
interface ValidationRules {
  [key: string]: {
    rule: (val: string) => boolean;
    error: string;
  };
}

export const validateInput = (value: string, type: string) => {
  const validationRules: ValidationRules = {
    required: {
      rule: (val) => val.trim() !== '',
      error: 'This field is required.',
    },
    passwordStrength: {
      rule: (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val),
      error:
        'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
    },
    email: {
      rule: (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      error: 'Please enter a valid email address.',
    },
    birthdate: {
      rule: (val) => validateBirthdate(val),
      error: 'Invalid birthdate. You must be at least 18 years old to register.',
    },
  };

  // Define the validation rules based on the type
  const rules = validationRules[type] || {};

  // Apply the validation rule
  const isValid = rules.rule ? rules.rule(value) : true;
  const error = isValid ? '' : rules.error;

  return { isValid, error };
};

// Custom validation function for birthdate
const validateBirthdate = (birthdate: string): boolean => {
  // Implement your logic to calculate age from the birthdate string
  const birthdateAge = calculateAge(birthdate);
  return birthdateAge >= 18;
};

// Function to calculate age based on birthdate
const calculateAge = (birthdate: string): number => {
  // Convert birthdate string to a Date object
  const birthdateDate = new Date(birthdate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  const age = currentDate.getFullYear() - birthdateDate.getFullYear();

  // Adjust age if the birthdate hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthdateDate.getMonth() ||
    (currentDate.getMonth() === birthdateDate.getMonth() && currentDate.getDate() < birthdateDate.getDate())
  ) {
    return age - 1;
  }

  return age;
};


"use client";

// Import necessary libraries
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateInput } from '../../utils/validation';

const Register: React.FC = () => {
  const router = useRouter();

  // State variables for all input fields and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [birthdateError, setBirthdateError] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  // Function to handle registration
  const handleRegister = async () => {
    // Validate inputs before attempting registration

    // Validate Email
    const emailValidation = validateInput(email, 'email');
    setEmailError(emailValidation.isValid ? '' : emailValidation.error);

    // Validate Password
    const passwordValidation = validateInput(password, 'passwordStrength');
    setPasswordError(passwordValidation.isValid ? '' : passwordValidation.error);

    // Validate First Name (required)
    const firstNameValidation = validateInput(firstName, 'required');
    setFirstNameError(firstNameValidation.isValid ? '' : firstNameValidation.error);

    // Validate Birthdate
    const birthdateValidation = validateInput(birthdate, 'birthdate');
    setBirthdateError(birthdateValidation.isValid ? '' : birthdateValidation.error);

    // Continue with registration logic
    if (
      emailValidation.isValid &&
      passwordValidation.isValid &&
      firstNameValidation.isValid &&
      birthdateValidation.isValid
    ) {
      try {
        // Your registration logic here
      } catch (error) {
        console.error('Registration error:', error);
        setErrorMsg('An unexpected error occurred');
      }
    }
  };

  // Function to handle navigation to login page
  const handleNavToLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 data-testid={'Register'} className="text-3xl font-bold mb-8">Register</h1>

      {/* Display error message for general errors */}
      {errorMsg && <p className="text-red-500 mt-4">{errorMsg}</p>}

      <form className="flex flex-col">
        {/* Email input */}
        <label className="mb-2 align-start">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mb-4 p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for email validation */}
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        {/* Password input */}
        <label className="mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`mb-4 p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for password validation */}
        {passwordError && <p className="text-red-500 w-64 text-sm">{passwordError}</p>}

        {/* First Name input */}
        <label className="mb-2">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`mb-4 p-2 border ${firstNameError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for first name validation */}
        {firstNameError && <p className="text-red-500 text-sm">{firstNameError}</p>}

        {/* Birthdate input */}
        <label className="mb-2">Birthdate:</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className={`mb-4 p-2 border ${birthdateError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for birthdate validation */}
        {birthdateError && <p className="text-red-500 w-64 text-sm">{birthdateError}</p>}

        {/* Register button */}
        <button
          type="button"
          onClick={handleRegister}
          className="bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>

        {/* Navigation to login */}
        <p className="mt-4 text-black">
          Already have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={handleNavToLogin}
          >
            Login now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;

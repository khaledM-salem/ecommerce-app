"use client";
import 'tailwindcss/tailwind.css';

// Import React and other necessary libraries
import { useState } from 'react';
// import { withRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { validateInput } from '../../utils/validation';

const Login: React.FC = () => {
  // Initialize state variables
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    // Validate inputs before attempting login

    // Validate Email
    const emailValidation = validateInput(email, 'email');
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error);
      setPasswordError(''); // Reset password error if any
      setErrorMsg(''); // Reset general error if any
      return;
    } else {
      setEmailError(''); // Reset email error if valid
    }

    // Validate Password
    const passwordValidation = validateInput(password, 'passwordStrength');
    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.error);
      setErrorMsg(''); // Reset general error if any
      return;
    } else {
      setPasswordError(''); // Reset password error if valid
    }

    // Continue with login logic
    try {
      // Your login logic here
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('An unexpected error occurred');
    }
  };

  // Function to handle navigation to register page
  const handleNavTo = () => {
    router.push('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      
      {/* Display error message for general errors */}
      {errorMsg && <p className="text-red-500 mt-4">{errorMsg}</p>}

      <form className="flex flex-col">
        <label className="mb-2 align-start">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mb-4 p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for email validation */}
        {emailError && <p className="text-red-500">{emailError}</p>}

        <label className="mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`mb-4 p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {/* Display error message for password validation */}
        {passwordError && <p className="text-red-500 w-64">{passwordError}</p>}

        <button
          type="button"
          onClick={handleLogin}
          className="bg-green-500 text-white p-2 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-black">
          Don't have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={handleNavTo}
          >
            Register now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Fetch token from localStorage
            const token = localStorage.getItem('token');

            const response = await fetch('http://localhost:5000/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send reset link');
            }

            setSuccessMessage('Reset link sent! Please check your email.');
            setErrorMessage('');
        } catch (error: any) {
            setErrorMessage(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-center text-purple-700 text-xl font-semibold mb-4">Did you forget your password?</h2>
                <p className="text-center text-gray-600 mb-6">Enter your email address and we’ll send you a link to reset your password.</p>
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">Request reset link</button>
                </form>
                <div className="text-center mt-4">
                    <a href="#" className="text-gray-600" onClick={() => navigate('/login')}>
                        Back to log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import bgimage from "../assets/bgimage.png";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Get the error message from response
                throw new Error(errorData.message || 'Login failed');
            }
    
            const data = await response.json();
            console.log('Login successful:', data);
            // Navigate or save token here
    
        } catch (error:any) {
            console.error('Error:', error); // Log the complete error for debugging
            setErrorMessage(error.message);
        }
    };
    

    return (
        <div 
            className="flex items-center justify-center min-h-screen"
            style={{
                width: '1380px',
                height: '600px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div 
                style={{
                    background: `url(${bgimage}) no-repeat center center`,
                    backgroundSize: 'contain',
                    width: '100%',
                    height: '100%',
                }}
            />
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#5C218B33',
                    zIndex: 1,
                }}
            />
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-10 absolute left-64 top-12">
                <div className="text-center mb-6">
                    <img src={logo} alt="Digitalflake logo" className="mx-auto mb-4" />
                    <p className="text-gray-600">Welcome to Digitalflake admin</p>
                </div>
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email-id
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email-id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <a 
                            className="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-800 cursor-pointer" 
                            onClick={handleForgotPassword}
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

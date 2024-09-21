import React from 'react';

const Logout: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                    <i className="fas fa-exclamation-triangle text-red-600 text-3xl"></i>
                </div>
                <h1 className="text-2xl font-bold mb-2">Log Out</h1>
                <p className="text-gray-500 mb-6">Are you sure you want to log out?</p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700">
                        Delete
                    </button>
                    <button className="px-6 py-2 bg-purple-700 text-white rounded-full">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;

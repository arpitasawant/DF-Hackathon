import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import name from "../assets/name.png";

const Home: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-100">
                <div className="bg-purple-800 h-16 flex items-center justify-end px-4">
                    <img src={name} alt="Digitalflake logo" className="mt-4 mb-4" />
                    <i className="fas fa-user-circle text-white text-2xl"></i>
                </div>
                <div className="mt-4">
                    <Link to="/home" className="flex items-center p-4 bg-yellow-200">
                        <i className="fas fa-home text-xl"></i>
                        <span className="ml-4 text-lg">Home</span>
                        <i className="fas fa-chevron-right ml-auto"></i>
                    </Link>
                    <Link to="/roles" className="flex items-center p-4">
                        <i className="fas fa-user-shield text-xl"></i>
                        <span className="ml-4 text-lg">Roles</span>
                        <i className="fas fa-chevron-right ml-auto"></i>
                    </Link>
                    <Link to="/users" className="flex items-center p-4">
                        <i className="fas fa-users text-xl"></i>
                        <span className="ml-4 text-lg">Users</span>
                        <i className="fas fa-chevron-right ml-auto"></i>
                    </Link>
                </div>
            </div>
            <div className="w-3/4 bg-white flex items-center justify-center">
                <div className="text-center">
                    <img src={logo} alt="Digitalflake logo" className="mx-auto mb-4" />
                    <p className="text-gray-600">Welcome to Digitalflake admin</p>
                </div>
            </div>
        </div>
    );
};

export default Home;

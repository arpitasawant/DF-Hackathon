import React from 'react';
import namelogo from "../assets/editlogo.png"
const Role: React.FC = () => {
    return (
        <div className="flex h-screen">
            <aside className="w-1/5 bg-gray-50 border-r border-gray-200">
                <div className="flex flex-col items-center py-6">
                <div className='bg-purple-700 flex items-center gap-24 h-12 w-48'>

                        <img src={namelogo} alt="Logo" className="w-64 h-auto" />
                    </div>
                    <nav className="w-full">
                        <ul>
                            <li className="flex items-center px-6 py-3 hover:bg-gray-200">
                                <i className="fas fa-home text-xl mr-4"></i>
                                <span className="text-lg">Home</span>
                            </li>
                            <li className="flex items-center px-6 py-3 bg-yellow-200">
                                <i className="fas fa-user-shield text-xl mr-4"></i>
                                <span className="text-lg">Roles</span>
                                <i className="fas fa-chevron-right ml-auto"></i>
                            </li>
                            <li className="flex items-center px-6 py-3 hover:bg-gray-200">
                                <i className="fas fa-users text-xl mr-4"></i>
                                <span className="text-lg">Users</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <main className="flex-1 bg-white">
                <header className="flex items-center justify-between bg-purple-700 text-white p-4">
                    <h1 className="text-2xl font-bold">Roles</h1>
                    <i className="fas fa-user-circle text-2xl"></i>
                </header>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <i className="fas fa-user-shield text-2xl mr-2"></i>
                            <h2 className="text-2xl font-bold">Roles</h2>
                        </div>
                        <div className="flex items-center">
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="border border-gray-300 rounded px-4 py-2 mr-4" 
                            />
                            <button className="bg-purple-700 text-white px-4 py-2 rounded">
                                Add New
                            </button>
                        </div>
                    </div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-yellow-200">
                                <th className="border border-gray-300 px-4 py-2">Id <i className="fas fa-sort"></i></th>
                                <th className="border border-gray-300 px-4 py-2">Role Name <i className="fas fa-sort"></i></th>
                                <th className="border border-gray-300 px-4 py-2">Status <i className="fas fa-sort"></i></th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">123</td>
                                <td className="border border-gray-300 px-4 py-2">Admin</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-500">Active</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <i className="fas fa-edit text-gray-500 cursor-pointer mr-2"></i>
                                    <i className="fas fa-trash text-gray-500 cursor-pointer"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">124</td>
                                <td className="border border-gray-300 px-4 py-2">Superadmin</td>
                                <td className="border border-gray-300 px-4 py-2 text-red-500">Inactive</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <i className="fas fa-edit text-gray-500 cursor-pointer mr-2"></i>
                                    <i className="fas fa-trash text-gray-500 cursor-pointer"></i>
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">125</td>
                                <td className="border border-gray-300 px-4 py-2">Caller</td>
                                <td className="border border-gray-300 px-4 py-2 text-red-500">Inactive</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <i className="fas fa-edit text-gray-500 cursor-pointer mr-2"></i>
                                    <i className="fas fa-trash text-gray-500 cursor-pointer"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">126</td>
                                <td className="border border-gray-300 px-4 py-2">Account</td>
                                <td className="border border-gray-300 px-4 py-2 text-green-500">Active</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <i className="fas fa-edit text-gray-500 cursor-pointer mr-2"></i>
                                    <i className="fas fa-trash text-gray-500 cursor-pointer"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Role;

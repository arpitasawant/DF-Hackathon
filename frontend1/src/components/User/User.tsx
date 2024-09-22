// UserManagement.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserShield, faUsers, faUserCircle, faEdit, faTrash, faSort, faUser } from '@fortawesome/free-solid-svg-icons';
import namelogo from '../../assets/editlogo.png';

const UserManagement: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-100">
                <div className="flex flex-col items-center py-8">
                <div className='bg-purple-700 flex items-center gap-24 h-12 w-48'>

<img src={namelogo} alt="Logo" className="w-64 h-auto" />
</div>
                    <div className="flex flex-col w-full">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faUserShield} className="mr-2" /> Roles
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-yellow-200">
                            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Users
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
                    <div className="text-2xl">User Management</div>
                    <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            <span className="text-xl">User</span>
                        </div>
                        <div className="flex items-center">
                            <input type="text" placeholder="Search" className="border rounded px-2 py-1 mr-2" />
                            <button className="bg-purple-700 text-white px-4 py-2 rounded">Add New</button>
                        </div>
                    </div>

                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-yellow-200">
                                <th className="py-2 px-4 border">Id <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Name <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Mobile <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Email-Id <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Role <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Status <FontAwesomeIcon icon={faSort} /></th>
                                <th className="py-2 px-4 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 123, name: 'Ramesh', mobile: '8756453402', email: 'Ramesh@gmail.com', role: 'Admin', status: 'Active' },
                                { id: 124, name: 'Geeta', mobile: '9987654323', email: 'Geeta@gmail.com', role: 'Super Admin', status: 'Inactive' },
                                { id: 125, name: 'Arun', mobile: '8865758485', email: 'Arun@gmail.com', role: 'Caller', status: 'Inactive' },
                                { id: 126, name: 'Soham', mobile: '9734564565', email: 'Soham@gmail.com', role: 'Account', status: 'Active' },
                            ].map(user => (
                                <tr className="border" key={user.id}>
                                    <td className="py-2 px-4 border">{user.id}</td>
                                    <td className="py-2 px-4 border">{user.name}</td>
                                    <td className="py-2 px-4 border">{user.mobile}</td>
                                    <td className="py-2 px-4 border">
                                        <a href={`mailto:${user.email}`} className="text-blue-500">{user.email}</a>
                                    </td>
                                    <td className="py-2 px-4 border">{user.role}</td>
                                    <td className="py-2 px-4 border text-green-500">{user.status}</td>
                                    <td className="py-2 px-4 border">
                                        <FontAwesomeIcon icon={faEdit} className="text-gray-500 mr-2" />
                                        <FontAwesomeIcon icon={faTrash} className="text-gray-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;

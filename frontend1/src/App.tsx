
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm';
import Home from './components/Home';
import Logout from './components/Logout';
import Role from './components/Role';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UserManagement from './components/User/User';
import AddUser from './components/User/AddUser';
import EditUser from './components/User/EditUser';
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/roles" element={<Role/>} />
                <Route path="/user" element={<UserManagement/>} />
                <Route path="/add-user" element={<AddUser/>} />
                <Route path="/edit-user" element={<EditUser/>} />
            </Routes>
        </Router>
    );
};

export default App;


// import React from 'react';
// import Logo from './components/Logo';
// import LoginForm from './components/LoginForm';

// const App: React.FC = () => {
//     return (
//         <div className="flex min-h-screen bg-purple-100">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-96 ml-36 mt-12 mb-12">
//                 <Logo />
//                 <LoginForm />
//             </div>
//         </div>
//     );
// };

// export default App;

// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Logout from './components/Logout';
import Role from './components/Role';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/roles" element={<Role/>} />
            </Routes>
        </Router>
    );
};

export default App;


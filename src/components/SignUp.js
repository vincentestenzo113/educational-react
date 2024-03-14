import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSignup = () => {
        // Dummy signup logic (replace with actual logic)
        console.log('Email:', email);
        console.log('Password:', password);
        // Redirect to login page after signup
        navigate('/login'); // Use navigate function to redirect
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="button" onClick={handleSignup}>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
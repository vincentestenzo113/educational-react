import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><Link to="/course-content">Course Content</Link></li>
                    <li><Link to="/quizzes">Quizzes</Link></li>
                    <li><Link to="/discussion-forums">Discussion Forums</Link></li>
                </ul>
            </div>
            <div className="content">
                <h2>Dashboard Content</h2>
                {'Afix'}
            </div>
        </div>
    );
};

export default Dashboard;
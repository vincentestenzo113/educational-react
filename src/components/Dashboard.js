import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <div><Link to="/CourseList">Course List</Link></div>
            </div>
            <div className="content">
                <h2>Dashboard Content</h2>
                {'Afix'}
            </div>
        </div>
    );
};

export default Dashboard;
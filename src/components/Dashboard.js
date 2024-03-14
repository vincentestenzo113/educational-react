import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CourseContent from './CourseContent';
import Quizzes from './Quizzes';
import DiscussionForums from './DiscussionForums';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><Link to="/CourseContent">Course Content</Link></li>
                    <li><Link to="/Quizzes">Quizzes</Link></li>
                    <li><Link to="/DiscussionForums">Discussion Forums</Link></li>
                </ul>
            </div>
            <div className="content">
                <h2>Dashboard Content</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
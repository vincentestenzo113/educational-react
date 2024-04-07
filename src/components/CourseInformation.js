import React from 'react';
import { Link } from 'react-router-dom';

const CourseInformation = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                <li><Link to="/Quizzes">Quizzes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default CourseInformation;

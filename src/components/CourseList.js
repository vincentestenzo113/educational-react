import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                <li><Link to="/BSIT">BS in Information Technology</Link></li>
                <li><Link to="/BSCE">BS in Civil Engineering</Link></li>
                <li><Link to="/BSTCM">BS in Technology Communication Management </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default CourseList;

import React from 'react';
import { Link } from 'react-router-dom';

const BSTCM = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                <li><Link to="/course-content">Learning Materials</Link></li>
                <li><Link to="/CourseInformation">Course Information</Link></li>
                <li><Link to="/discussion-forums">Discussion Forums</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default BSTCM;

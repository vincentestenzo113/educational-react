import React from 'react';
import { Link } from 'react-router-dom';
import CourseContent from './CourseContent';
import Quizzes from './Quizzes';
import DiscussionForums from './DiscussionForums';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>
                        <Link to="/dashboard/course-content">Course Content</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/quizzes">Quizzes</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/discussion-forums">Discussion Forums</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                {/* Content for each component */}
                <CourseContent />
                <Quizzes />
                <DiscussionForums />
            </div>
        </div>
    );
};

export default Dashboard;
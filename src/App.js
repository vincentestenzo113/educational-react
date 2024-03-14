import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import CourseContent from './components/CourseContent';
import Quizzes from './components/Quizzes';
import DiscussionForum from './components/DiscussionForums';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/course-content" element={<CourseContent />} />
                    <Route path="/quizzes" element={<Quizzes />} />
                    <Route path="/discussion-forums" element={<DiscussionForum />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import CourseContent from './components/CourseContent';
import Quizzes from './components/Quizzes';
import DiscussionForum from './components/DiscussionForums';
import Home from './components/Home';
import './styles.css';
import CourseList from './components/CourseList';
import BSIT from './components/BSIT';
import BSCE from './components/BSCE';
import BSTCM from './components/BSTCM';
import CourseInformation from './components/CourseInformation';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/CourseList" element={<CourseList />} />
                    <Route path="/BSIT" element={<BSIT />} />
                    <Route path="/BSCE" element={<BSCE />} />
                    <Route path="/BSTCM" element={<BSTCM />} />
                    <Route path="/course-content" element={<CourseContent />} />
                    <Route path="/CourseInformation" element={<CourseInformation />} />
                    <Route path="/quizzes" element={<Quizzes />} />
                    <Route path="/discussion-forums" element={<DiscussionForum />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
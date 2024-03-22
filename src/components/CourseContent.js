import React from 'react';


const CourseContent = () => {
    return (
        <div className="course-content">
            <h2>Course Content</h2>
            <p>Welcome to our course! Here you'll find all the materials you need to succeed.</p>
            <div className="chapter">
                <h3>Chapter 1: Introduction to React.js</h3>
                <p>In this chapter, we'll introduce you to the basics of React.js and its core concepts.</p>
                <p>Topics covered:</p>
                <ul>
                    <li>What is React.js?</li>
                    <li>Setting up React environment</li>
                    <li>Components and JSX</li>
                </ul>
            </div>
            <div className="chapter">
                <h3>Chapter 2: React Components</h3>
                <p>This chapter dives deeper into React components and how to create and manage them.</p>
                <p>Topics covered:</p>
                <ul>
                    <li>Functional components</li>
                    <li>Class components</li>
                    <li>State and props</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseContent;
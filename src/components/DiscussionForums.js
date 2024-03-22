import React from 'react';

const DiscussionForums = () => {
    return (
        <div className="discussion-forums">
            <h2>Discussion Forums</h2>
            <p>Engage with other learners in our discussion forums!</p>
            <div className="forum-topic">
                <h3>Topic 1: React.js Fundamentals</h3>
                <p>Discuss anything related to React.js fundamentals in this forum.</p>
                <button>Join Discussion</button>
            </div>
            <div className="forum-topic">
                <h3>Topic 2: Best Practices in React Development</h3>
                <p>Share your experiences and learn from others about React best practices.</p>
                <button>Join Discussion</button>
            </div>
        </div>
    );
};

export default DiscussionForums;
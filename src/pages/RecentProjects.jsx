import React from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
    return (
        <div className="recent-projects">
            <h2>Recent Projects</h2>
            <div className="projects">
                <div className="project-item">
                    <img src="https://via.placeholder.com/300" alt="Project 1" />
                    <p>Project 1: Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="project-item">
                    <img src="https://via.placeholder.com/300" alt="Project 2" />
                    <p>Project 2: Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
                <div className="project-item">
                    <img src="https://via.placeholder.com/300" alt="Project 3" />
                    <p>Project 3: Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                </div>
            </div>
        </div>
    );
}

export default RecentProjects;

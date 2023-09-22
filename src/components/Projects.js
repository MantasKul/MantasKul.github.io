import { Fragment } from 'react';
import { Card } from './Card';

import './Project.css';
import projectdata from './project-data.json';

export const Projects = () => {
    return (
        <div className="project-container">
            <Card jsonVar={ projectdata[0] } />
            <Card jsonVar={ projectdata[1] } />
            <Card jsonVar={ projectdata[2] } />
            <Card jsonVar={ projectdata[3] } />
            <Card jsonVar={ projectdata[4] } />
        </div>
    )
}



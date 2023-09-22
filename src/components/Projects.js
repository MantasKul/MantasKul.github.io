import { Fragment } from 'react';
import { Card } from './Card';

import projectdata from './project-data.json';

export const Projects = () => {

    /*const proejcts = {
        imgSrc: "./GridLevel.png",
        imgAlt: "FPS Shooter",
        title: "FPS with random levels",
        description: "First Person Shooter with Procedurally Generated Levels",
        buttonText: "Git Source",
        link: "https://github.com/MantasKul/ProcedurallyGeneratedFPS"
    }*/

    return (
        <Fragment>
            <Card jsonVar={ projectdata[0] } />
        </Fragment>
    )
}
/*
        <Fragment>
            <Card imgSrc={ require("./GridLevel.png") }
            imgAlt="FPS Shooter"
            title="FPS with random levels"
            description="First Person Shooter with Procedurally Generated Levels"
            buttonText="Git Source"
            link="https://github.com/MantasKul/ProcedurallyGeneratedFPS"/>
        </Fragment>
*/

/* Projects to add
https://github.com/MantasKul/RubyOnRails
https://github.com/MantasKul/VintedHomework
https://github.com/MantasKul/SortAlgorithmVisualizer
https://github.com/MantasKul/ConnectDots
*/
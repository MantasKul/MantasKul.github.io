import './About.css';
import { Fragment } from "react";

export const About = () => {
    const experience = ['Java', 'C#', 'C++', 'JavaScript', 'Ruby', 'React', 'Angular', 'Spring Boot', 'Ruby on Rails', 'Unity', 'Git/Github', 'SQL', 'MySql', 'MS SQL'];

    const exp = experience.map((item, index) => {
        return (
            (index ? ", ": "") + item
        )
    });

    return (
        <div className="text-main">
            <h1>About me!</h1>
            <p>I'm an aspiring software developer/engineer. I've studied IT at Vilnius University and worked as a Junior Test Engineer/Custome QA at Unity. In both places, I've learned a lot that I've been building upon in my own free time, improving, and getting better!
                In my free time, I like to play guitar, I've got electric, and acoustic, play video games, and learn Japanese. Below I'll list of what kind of experience I have, whether it is programming language, tool, or framework I've worked with.<br />
            </p>

            <h2>Experience</h2>
            <p>{ exp }</p>
        </div>
    );
}
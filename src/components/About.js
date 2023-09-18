import './About.css';
import { Fragment } from "react";

export const About = () => {
    const experience = ['Java', 'C#', 'C++', 'JavaScript', 'Ruby', 'React', 'Angular', 'Spring Boot', 'Ruby on Rails', 'Unity', 'Git/Github', 'SQL', 'MySql', 'MS SQL'];
    const hobbies = ['Guitar', 'Japanese', 'Video Games'];

    const exp = experience.map((item, index) => {
        return (
            (index ? ", ": "") + item
        )
    });

    const hobby = hobbies.map((item, index) => {
        return (
            (index ? ", ": "") + item
        )
    });

    return (
        <Fragment>
            <div className="text-main">
                <h1>About me!</h1>
                <p>I've studied IT at Vilnius University and worked as a Junior Test Engineer/Customer QA at Unity for 2.5 years.
                    Currently, I'm learning what I can to improve my programming skills, making sure to write clean, readable, and maintainable code and not only code that 'just works', I'm making sure that it's
                    as optimal as I can make it. My main focus currently is Java and Spring Boot for back-end development, and Angular for front-end development. Well besides making this portfolio nice and modern!<br />
                </p>

                <h2>Experience</h2>
                <ol>{ exp }</ol>

                <h2>Hobbies</h2>
                <ol>{ hobby }</ol>
            </div>
        </Fragment>
    );
}
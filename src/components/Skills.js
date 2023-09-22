export const Skills = () => {
    const experience = ['Java', 'C#', 'C++', 'JavaScript', 'Ruby', 'React', 'Angular', 'Spring Boot', 'Ruby on Rails', 'Unity', 'Git/Github', 'SQL', 'MySql', 'MS SQL'];
    const exp = experience.map((item, index) => {
        return (
            (index ? ", ": "") + item
        )
    });
    
    return (
        <div>
            <h1>Skills</h1>
            <ol>{ exp }</ol>
        </div>
    )
}
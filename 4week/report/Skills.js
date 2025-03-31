const Skills = () => {
    const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS","C"];
    
    return (
        <section>
            <h3>기술 스킬</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};
export default Skills;
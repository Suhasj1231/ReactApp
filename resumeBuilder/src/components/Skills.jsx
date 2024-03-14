import React from 'react';

const Skills = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
};

export default Skills;

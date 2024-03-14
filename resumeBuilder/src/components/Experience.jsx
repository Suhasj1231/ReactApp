import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <ul>
      {experiences.slice(0, 3).map((experience) => (
        <li key={experience.company}>
          {experience.year} - {experience.company}, {experience.role}
        </li>
      ))}
    </ul>
  );
};

export default Experience;

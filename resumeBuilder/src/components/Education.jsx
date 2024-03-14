import React from 'react';

const Education = ({ educations }) => {
  return (
    <ul>
      {educations.map((education) => (
        <li key={education.institution}>
          {education.institution}, {education.degree}, {education.graduationYear}
        </li>
      ))}
    </ul>
  );
};

export default Education;

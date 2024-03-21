import React from 'react';

const Education = ({ educations }) => {
  console.log(educations)
  return (
    {     educations.length > 0 ? (
        <>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul>
        {educations.map((education) => (
          <li key={education.institution}>
            {education.institution}, {education.degree}, {education.graduationYear}
          </li>
        ))}
        </ul>
        </>

      )
    }
   
  );
};

export default Education;

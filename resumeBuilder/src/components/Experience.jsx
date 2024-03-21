// import React from 'react';

// const Experience = ({ experiences }) => {
//   return (
//     <ul>
//       {experiences.slice(0, 3).map((experience) => (
//         <li key={experience.company}>
//           {experience.year} - {experience.company}, {experience.role}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Experience;
import React from 'react';

const Experience = ({ experience }) => {
  return (
    experience.length > 0 ? (
      <>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul>
          {experience.slice(0, 3).map((exp) => (
            <li key={exp.company}>
              {exp.year} - {exp.company}, {exp.role}
            </li>
          ))}
        </ul>
      </>
    ) : null
  );
};

export default Experience;

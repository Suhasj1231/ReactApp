// import React from 'react';

// const Skills = ({ skills }) => {
//   console.log(skills)
//   return (<>
//           {
//             // console.log(skills.length )
//             skills.length && 
//         <h2 className="text-2xl font-bold mb-4">Skills</h2>
//     <ul>
//       {skills.map((skill) => (
//         <li key={skill}>{skill}</li>
//         ))}
//     </ul>
//           }
//         </>
//   );
// };

// export default Skills;


import React from 'react'; // Corrected import statement

const Skills = ({ skills }) => {
  console.log(skills); // Log skills for debugging purposes

  // Conditional rendering to display heading and list only if skills exist
  return (
    <>
      {skills.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Skills;

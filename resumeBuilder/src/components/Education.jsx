// import React from 'react';

// const Education = ({ education }) => {
//   console.log(education)
//   return (
//     {     education.length > 0 ? (
//         <>
//         <h2 className="text-2xl font-bold mb-4">Education</h2>
//         <ul>
//         {education.map((education) => (
//           <li key={education.institution}>
//             {education.institution}, {education.degree}, {education.graduationYear}
//           </li>
//         ))}
//         </ul>
//         </>

//       )
//     }
   
//   );
// };

// export default Education;

import React from 'react';

const Education = ({ education }) => {
  // console.log(education);
  return (
    education.length > 0 ? (
      <>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul>
          {education.map((edu) => (
            <li key={edu.institution}>
              {edu.institution}, {edu.degree}, {edu.graduationYear}
            </li>
          ))}
        </ul>
      </>
    ) : null
  );
};

export default Education;

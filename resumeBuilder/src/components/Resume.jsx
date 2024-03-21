import React from 'react';
// import './Resume.css'; // Import your CSS file
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import resumeData from '../data';

// const Resume = () => {
//   const { name, email, phone, summary, experience, education, skills } = resumeData;

//   return (
//     <div className="container border border-gray-300 shadow-2xl mt-4 mx-auto px-4 py-8 sm:w-1/2">  {/* Tailwind classes for layout */}
//       <header className="flex flex-col sm:flex sm:flex-row justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">{name}</h1>
//         <p className="text-gray-600">{email} | {phone}</p>
//       </header>
//       <hr></hr>
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Summary</h2>
//         <p className="text-gray-700">{summary}</p>
//       </section>
//       <hr></hr>
//       <section className="mb-8">
//         <Experience experience={experience} />
//       </section>
//       <hr></hr>
//       <section className="mb-8">
//         <Education education={education} />
//       </section>
//       <hr></hr>
//       <section>
//         <Skills skills={skills} />
//       </section>
//     </div>
//   );
// };

// import React from 'react';

const Resume = () => {
  const { name, email, phone, summary, experience, education, skills } = resumeData;

  return (
    <div className="container border border-gray-300 shadow-2xl mt-4 mx-auto px-4 py-8 sm:w-1/2">
      <header className="flex flex-col sm:flex sm:flex-row justify-between items-center mb-8">
        {name && (
          <h1 className="text-3xl font-bold">{name}</h1>
        )}
        {(email || phone) && (
          <p className="text-gray-600">
            {email && `${email} | `}
            {phone && phone}
          </p>
        )}
      </header>
      <hr></hr>
      {summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}
      <hr></hr>
      <section className="mb-8">
        <Experience experience={experience} />
      </section>
      <hr></hr>
      <section className="mb-8">
        <Education education={education} />
      </section>
      <hr></hr>
      <section>
        <Skills skills={skills} />
      </section>
    </div>
  );
};

export default Resume;


// import React from 'react';
// // import './Resume.css'; // Add CSS file for styling (optional)
// import Skills from './Skills';
// import Education from './Education';
// import Experience from './Experience';
// import resumeData from '../data';

// const Resume = () => {
//   const { name, email, phone, summary, experience, education, skills } = resumeData;

//   return (
//     <div className="resume w-1/2 mx-auto mt-6 ">
//       <header>
//         <h1 className='text-3xl underline underline-offset-4 ' >{name}</h1>
//         <p>{email} | {phone}</p>
//       </header>
//       <section className="summary">
//         <h2>Summary</h2>
//         <p>{summary}</p>
//       </section>
//       <section className="experience">
//         <h2>Experience</h2>
//         <Experience experiences={experience} />
//       </section>
//       <section className="education">
//         <h2>Education</h2>
//         <Education educations={education} />
//       </section>
//       <section className="skills">
//         <h2>Skills</h2>
//         <Skills skills={skills} />
//       </section>
//     </div>
//   );
// };

// export default Resume;

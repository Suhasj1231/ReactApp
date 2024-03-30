import React from 'react';
// import './Resume.css'; // Import your CSS file
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import { TiPrinter } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";


const Resume = ({details}) => {
  // const { name, email, phone, summary, experience, education, projects,skills } = resumeData;
  const { name, email, phone, summary, experience, education, projects,skills } = details;

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };


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
        {/* <button> </button> */}
      </header>
      <div className='flex flex-row-reverse my-2 ' >
      <button className='bg-gray-300 size-10 text-center rounded-full

' onClick={handlePrint}> <TiPrinter className='mx-auto size-6' />
  </button>
      <button className='bg-gray-300 size-10 text-center rounded-full

' onClick={()=>console.log('can edit the form ')}> <FaEdit className='mx-auto size-6 gap-2' />
  </button>

      </div>
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
      <section className='mb-8'>
        <Projects projects={projects} ></Projects>
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


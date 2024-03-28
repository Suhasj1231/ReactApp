// components/Header.js
import React from 'react';

function Projects({projects}) {
  return (
    <>
      {projects.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul>
            {projects.map((proj , index) => (
              <li key={index}>{proj.name} : {proj.desc}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Projects;

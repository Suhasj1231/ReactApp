import React from 'react';
// import './Resume.css'; // Add CSS file for styling (optional)
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import resumeData from '../data';

const Resume = () => {
  const { name, email, phone, summary, experience, education, skills } = resumeData;

  return (
    <div className="resume">
      <header>
        <h1>{name}</h1>
        <p>{email} | {phone}</p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <Experience experiences={experience} />
      </section>
      <section className="education">
        <h2>Education</h2>
        <Education educations={education} />
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <Skills skills={skills} />
      </section>
    </div>
  );
};

export default Resume;

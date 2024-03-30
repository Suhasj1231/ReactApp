
import React, { useState } from 'react';

const EditCredentials = ({ initialData, setData  }) => {
  // const [formData, setFormData] = useState(initialData);
  const { name, email, phone, summary, experience, education, projects,skills } = initialData;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...initialData,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container border border-gray-300 shadow-2xl mt-4 mx-auto px-4 py-8 sm:w-1/2">

      <h2 className="text-2xl font-bold mb-4">Edit Credentials</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData?.name}
            value={!name?'':name}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData?.email}
            value={!email?'':email}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            // value={formData?.phone}
            value={!phone?'':phone}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your phone number"
          />
        </div>
        {/* Summary */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            // value={formData?.summary}
            value={!summary?'':summary}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your summary"
          />
        </div>
        {/* Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor='experience' >Experience</label>
          {experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <input
                type="number"
                name="year"
                value={exp.year}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="number of Years"
              />
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Company"
              />
              <input
                type="text"
                name="role"
                value={exp.role}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Role and period"
              />
            </div>
          )) }
          <div  className="mb-2">
              <input
                type="number"
                name="year"
                value={undefined}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="number of Years"
              />
              <input
                type="text"
                name="company"
                value={undefined}
                // onChange={(e) => handleChange(e, index)}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Company"
              />
              <input
                type="text"
                name="role"
                value={undefined}
                onChange={ handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Role and period"
              />
            </div>
          <button type="button" onClick={()=>{console.log('experience updated ')}} className="bg-blue-500 text-white px-4 py-2 rounded">Add Experience</button>
        </div>
        {/* Projects */}
<div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Projects</label>
          {/* {formData?.projects.map((project, index) => ( */}
          {projects.name?projects.map((project, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name="name"
                value={project.name}
                onChange={ handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="desc"
                value={project.desc}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Description"
              />
            </div>
          )) : null}
          <div className="mb-2">
              <input
                type="text"
                name="name"
                value={undefined}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="desc"
                value={undefined}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Description"
              />
            </div>
          <button type="button" onClick={()=>console.log('project added')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
        </div>
        {/* Education */}
         <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Education</label>
          {/* {formData?.education.map((edu, index) => ( */}
          {education.institution?education.map((edu, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name="institution"
                value={edu.institution}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Degree"
              />
              <input
                type="number"
                name="graduationYear"
                value={edu.graduationYear}
                onChange={ handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Graduation Year"
              />
            </div>
          )):null }
          <div  className="mb-2">
              <input
                type="text"
                name="institution"
                value={undefined}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={undefined}
                onChange={handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Degree"
              />
              <input
                type="number"
                name="graduationYear"
                value={undefined}
                onChange={ handleChange}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Graduation Year"
              />
            </div>
          <button type="button" onClick={()=>console.log('education edited')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Education</button>
        </div>
        {/* Skills */}
         <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Skills</label>
          <ul className="mt-2">
            {/* {formData?.skills.map((skill, index) => ( */}
            {skills.length > 0 ?skills.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            )):null}
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              name="newSkill"
              value={undefined}
              onChange={ handleChange}
              className="border rounded px-3 py-2 mr-2"
              placeholder="Add new skill"
            />
            <button type="button" onClick={()=>console.log('skills edited')} className="bg-blue-500 text-white px-4 py-2 rounded">Add skills</button>
          </div>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save all details</button>
      </form>
    </div>
  );
};

export default EditCredentials;




import React, { useState } from 'react';

const EditCredentials = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Credentials</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            value={formData.email}
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
            value={formData.phone}
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
            value={formData.summary}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your summary"
          />
        </div>
        {/* Experience
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your experience"
          />
        </div> */}

        {/* <div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Experience</label>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <input
                type="number"
                name="year"
                value={exp.year}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Year"
              />
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Company"
              />
              <input
                type="text"
                name="role"
                value={exp.role}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Role"
              />
            </div>
          ))}
          <div  className="mb-2">
              <input
                type="number"
                name="year"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Year"
              />
              <input
                type="text"
                name="company"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Company"
              />
              <input
                type="text"
                name="role"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Role"
              />
            </div>
          <button type="button" onClick={()=>console.log('experience added')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Experience</button>
        </div>
            
        {/* </div> */}



        {/* Projects */}
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="projects">Projects</label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your projects"
          />
        </div> */}

<div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Projects</label>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name="name"
                value={project.name}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="desc"
                value={project.desc}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Description"
              />
            </div>
          ))}
          <div className="mb-2">
              <input
                type="text"
                name="name"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="desc"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Description"
              />
            </div>
          <button type="button" onClick={()=>console.log('project added')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
        </div>



        {/* Education */}
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="education">Education</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your education"
          />
        </div> */}
         <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Education</label>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name="institution"
                value={edu.institution}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Degree"
              />
              <input
                type="number"
                name="graduationYear"
                value={edu.graduationYear}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Graduation Year"
              />
            </div>
          ))}
          <div  className="mb-2">
              <input
                type="text"
                name="institution"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Degree"
              />
              <input
                type="number"
                name="graduationYear"
                value={''}
                onChange={(e) => handleChange(e, index)}
                className="border rounded px-3 py-2 mr-2"
                placeholder="Graduation Year"
              />
            </div>
          <button type="button" onClick={()=>console.log('education edited')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Education</button>
        </div>


        {/* Skills */}
        
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">Skills </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter your skills"
          />
        </div> */}
         <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Skills</label>
          <ul className="mt-2">
            {formData.skills.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            ))}
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              name="newSkill"
              value={''}
              onChange={(e) => setNewSkill(e.target.value)}
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



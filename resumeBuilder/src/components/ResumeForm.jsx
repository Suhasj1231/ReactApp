import React, { useState } from 'react';

const ResumeForm = ({details , setUserData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: [{ year: '', company: '', role: '' }],
    projects: [{ name: '', desc: '' }],
    education: [{ institution: '', degree: '', graduationYear: '' }],
    skills: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleArrayChange = (index, key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: prevData[key].map((item, i) => (i === index ? { ...item, [key]: value } : item))
    }));
  };

  const handleSkillsChange = (index, value) => {
    setFormData(prevData => ({
      ...prevData,
      skills: prevData.skills.map((item, i) => (i === index ? value : item))
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setUserData(formData);
    // Here you can submit the form data to the server or perform any other actions
  };

  return (
    <div className="container border border-gray-300 shadow-2xl mt-4 mx-auto px-4 py-8 sm:w-1/2">

<h2 className="text-2xl font-bold mb-4">Edit Credentials</h2>

      <form onSubmit={handleSubmit}>
      <div className="mb-4">

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}className="border rounded px-3 py-2 w-full"   />
        </div>
        <div className="mb-4">
        
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}className="border rounded px-3 py-2 w-full"   /></div>
        <div className="mb-4">
        
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}className="border rounded px-3 py-2 w-full"   /></div>
        <div className="mb-4">
        
        <label>Summary</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange}className="border rounded px-3 py-2 w-full"  ></textarea></div>
        <div className="mb-4">
        
        <label>Experience</label>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <input className="border rounded px-3 py-2 w-full"  type="number" value={exp.year?exp.year:undefined} onChange={(e) => handleArrayChange(index, 'experience', e.target.value)} placeholder="Year" />
            <input className="border rounded px-3 py-2 w-full"  type="text" value={exp.company?exp.company:undefined} onChange={(e) => handleArrayChange(index, 'experience', e.target.value)} placeholder="Company" />
            <input className="border rounded px-3 py-2 w-full"  type="text" value={exp.role?exp.role:undefined} onChange={(e) => handleArrayChange(index, 'experience', e.target.value)} placeholder="Role" />
          </div>
        ))}
        <button type="button" onClick={() => setFormData(prevData => ({ ...prevData, experience: [...prevData.experience, {}] }))}>Add Experience</button></div>
        <div className="mb-4">

        <label>Projects</label>
        {formData.projects.map((project, index) => (
          <div key={index}>
            <input className="border rounded px-3 py-2 w-full"  type="text" value={project.name?project.name:undefined} onChange={(e) => handleArrayChange(index, 'projects', e.target.value)} placeholder="Name" />
            <input className="border rounded px-3 py-2 w-full"  type="text" value={project.desc?project.desc:undefined} onChange={(e) => handleArrayChange(index, 'projects', e.target.value)} placeholder="Description" />
          </div>
        ))}
        <button type="button" onClick={() => setFormData(prevData => ({ ...prevData, projects: [...prevData.projects, {}] }))}>Add Project</button></div>
        <div className="mb-4">

        <label>Education</label>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input className="border rounded px-3 py-2 w-full"  type="text" value={edu.institution?edu.institution:undefined} onChange={(e) => handleArrayChange(index, 'education', e.target.value)} placeholder="Institution" />
            <input className="border rounded px-3 py-2 w-full"  type="text" value={edu.degree?edu.degree:undefined} onChange={(e) => handleArrayChange(index, 'education', e.target.value)} placeholder="Degree" />
            <input className="border rounded px-3 py-2 w-full"  type="number" value={edu.graduationYear?edu.graduationYear:undefined} onChange={(e) => handleArrayChange(index, 'education', e.target.value)} placeholder="Graduation Year" />
          </div>
        ))}
        <button type="button" onClick={() => setFormData(prevData => ({ ...prevData, education: [...prevData.education, {}] }))}>Add Education</button></div>
        <div className="mb-4">

        <label>Skills</label>
        {formData.skills.map((skill, index) => (
          <div key={index}>
            <input className="border rounded px-3 py-2 w-full"  type="text" value={skill} onChange={(e) => handleSkillsChange(index, e.target.value)} placeholder="Skill" />
          </div>
        ))}
        <button type="button" onClick={() => setFormData(prevData => ({ ...prevData, skills: [...prevData.skills, ''] }))}>Add Skill</button></div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeForm;

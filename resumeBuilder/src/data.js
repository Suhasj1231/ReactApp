 const resumeData = {
    name: "Your Name",
    email: "your_email@example.com",
    phone: "+1234567890",
    summary: "A brief summary of your skills and experience.",
    experience: [
      { year: 2020, company: "Company A", role: "Software Engineer" },
      { year: 2018, company: "Company B", role: "Web Developer" },
      { year: 2016, company: "Company C", role: "Intern" }, // Limit to 3 items
    ],
    projects : [
      { "name" :"blog app" ,
       "desc" : "helps people to share and read blogs "},
      {"name" : "ecom-web",
      "desc": "ease of shopping "}
    ],
    education: [
      { institution: "University Name", degree: "Bachelor of Science in Computer Science", graduationYear: 2020 },
      { institution: "Community College", degree: "Associate's Degree in Web Development", graduationYear: 2018 },
    ],
    skills: ["React JS", "Node JS", "HTML", "CSS", "JavaScript"], // Unlimited skills
  };
  
  export default resumeData; 
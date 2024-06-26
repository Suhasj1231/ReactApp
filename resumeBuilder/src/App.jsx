import React from 'react';
import Resume from './components/Resume';
import EditCredentials from './components/EditCredentials';
import resumeData from './data';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import ResumeForm from './components/ResumeForm';



function App() {
  const { name, email, phone, summary, experience, education, projects,skills } = resumeData;


  const [ResumeView , setResumeView] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: [{ year: '', company: '', role: '' }],
    projects: [{ name: '', desc: '' }],
    education: [{ institution: '', degree: '', graduationYear: '' }],
    skills: ['']
  });


  return (
    <div className="App">
      <button onClick={ ()=>setResumeView(!ResumeView)}> {ResumeView ?  <FaEdit/> : <FaEye /> 
} </button>
      {/* {ResumeView ? <Resume details={resumeData} ></Resume> : <EditCredentials initialData={resumeData}  setData={setData}  ></EditCredentials> } */}
      {ResumeView ? <Resume details={userData} ></Resume> : <ResumeForm details={userData} setUserData={setUserData} ></ResumeForm>}
      {/* <Resume /> */}
      {/* <EditCredentials initialData={resumeData} onSave={handleOnSave} ></EditCredentials> */}

    </div>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import Resume from './components/Resume';
import EditCredentials from './components/EditCredentials';
import resumeData from './data';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";



function App() {
  const { name, email, phone, summary, experience, education, projects,skills } = resumeData;

  function handleOnSave(){
    console.log('saved');
  }

  const [ResumeView , setResumeView] = useState(true);
  const [Data , setData] = useState({
      name: "",
      email: "",
      phone: "",
      summary: "",
      experience: [
        { year:0 , company: "", role: " " },
      ],
      
      projects : [
        { "name" :"" ,
         "desc" : ""},
      ],
      education: [
        { institution: "", degree: "", graduationYear: 0 },
      ],
      skills: [], // Unlimited skills
    
  });


  return (
    <div className="App">
      <button onClick={ ()=>setResumeView(!ResumeView)}> {ResumeView ?  <FaEdit/> : <FaEye /> 
} </button>
      {ResumeView ? <Resume details={Data} ></Resume> : <EditCredentials initialData={Data}  setData={setData} onSave={handleOnSave} ></EditCredentials> }
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

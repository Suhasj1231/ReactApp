// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [countryName, setCountryName] = useState('');
//   const [countryCode, setCountryCode] = useState('');
//   const [nations, setNations] = useState([
//     { name: 'India', value: 'IN' },
//     { name: 'Pak', value: 'PK' },
//     { name: 'Bangladesh', value: 'BG' }
//   ]);

//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//     console.log('Selected Value:', event.target.value);
//   };

//   const handleAddCountry = () => {
//     if (countryName && countryCode) {
//       const newCountry = { name: countryName, value: countryCode };
//       setNations([...nations, newCountry]);
//       setCountryName('');
//       setCountryCode('');
//     }
//   };

//   return (
//     <div className='w-1/2 h-24 mx-auto bg-green-100 my-4 p-4' >
//       <select value={selectedValue} onChange={handleSelectChange}>
//         <option value="">Select a country</option>
//         {nations.map((nation, index) => (
//           <option key={index} value={nation.value}>{nation.name}</option>
//         ))}
//       </select>
//       <div>
//         <input
//           type="text"
//           placeholder="Country Name"
//           value={countryName}
//           onChange={(e) => setCountryName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Country Code"
//           value={countryCode}
//           onChange={(e) => setCountryCode(e.target.value)}
//         />
//         <button onClick={handleAddCountry}>Add Country</button>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState } from 'react';

const Dropdown = () => {
  const [nations, setNations] = useState([
    { name: 'India', value: 'IN' },
    { name: 'Pak', value: 'PK' },
    { name: 'Bangladesh', value: 'BG' },
  ]);
  const [newCountryName, setNewCountryName] = useState('');
  const [newCountryCode, setNewCountryCode] = useState('');
  const [selectedNation, setSelectedNation] = useState(null);

  const handleAddNation = () => {
    if (!newCountryName || !newCountryCode) return; // Check for empty fields

    const newNation = {
      name: newCountryName,
      value: newCountryCode,
    };
    setNations([...nations, newNation]); // Add new nation to the state
    setNewCountryName(''); // Clear input fields
    setNewCountryCode('');
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedNation = nations.find((nation) => nation.value === selectedValue);
    setSelectedNation(selectedNation);
    console.log('Selected nation:', selectedNation); // Log selected nation object
  };

  return (
    <div>
      <h2>Nations Dropdown</h2>
      <select onChange={handleSelectChange} value={selectedNation?.value || ''}>
        <option value="">Select a nation</option>
        {nations.map((nation) => (
          <option key={nation.value} value={nation.value}>
            {nation.name}
          </option>
        ))}
      </select>

      <h3>Add a new nation</h3>
      <input
        type="text"
        placeholder="Country Name"
        value={newCountryName}
        onChange={(event) => setNewCountryName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Country Code"
        value={newCountryCode}
        onChange={(event) => setNewCountryCode(event.target.value)}
      />
      <button onClick={handleAddNation}>Add Nation</button>

      {selectedNation && (
        <p>Selected Nation: {selectedNation.name} ({selectedNation.value})</p>
      )}
    </div>
  );
};

export default Dropdown;

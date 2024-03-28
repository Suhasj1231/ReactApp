import React, { useState } from 'react';

const List = ({ filteredList }) => (
  <ul className="overflow-auto max-h-60">
    {filteredList.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const InputForm = ({ searchTerm, setSearchTerm, newElement, setNewElement, addElement }) => (
  <div className="flex flex-col items-center mb-4">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full border border-gray-300 rounded px-3 py-1 mb-2"
    />
    <input
      type="text"
      placeholder="Add New Element..."
      value={newElement}
      onChange={(e) => setNewElement(e.target.value)}
      className="w-full border border-gray-300 rounded px-3 py-1 mb-2"
    />
    <button onClick={addElement} className="bg-blue-500 text-white px-4 py-2 rounded">Add Element</button>
  </div>
);

const SearchableList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newElement, setNewElement] = useState('');
  const [listItems, setListItems] = useState([
    'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Australia', 'England', 'South Africa', 'New Zealand', 'West Indies', 'Afghanistan'
  ]);

  const filteredList = listItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addElement = () => {
    if (newElement.trim() !== '') {
      setListItems([...listItems, newElement]);
      setNewElement('');
    }
  };

  return (
    <div className="flex flex-col items-center w-1/2 h-80 bg-slate-500 mx-auto p-4 my-4 ">
      <InputForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        newElement={newElement}
        setNewElement={setNewElement}
        addElement={addElement}
      />
      {filteredList.length > 0 ? (
        <List filteredList={filteredList} />
      ) : (
        <p className="text-white">No results found</p>
      )}
    </div>
  );
};

export default SearchableList;


// import React, { useState } from 'react';

// const SearchableList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [listItems] = useState([
//     'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Australia', 'England', 'South Africa', 'New Zealand', 'West Indies', 'Afghanistan'
//   ]);

//   const filteredList = listItems.filter(item =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='w-1/2 bg-slate-500 p-4 my-4 mx-auto h-80'  >
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className='mx-'
//       />
//       <ul>
//         {filteredList.map((item, index) => (
//           <li key={index} className=' border ' >{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchableList;


// import SearchableList from './SearchableList';

// const cricketPlayers = [
//   'Virat Kohli',
//   'Rohit Sharma',
//   'Jasprit Bumrah',
//   'Steve Smith',
//   'David Warner',
// ];

// function SearchableList() {
//   return (
//     <div>
//       <h2>Searchable Cricket Players List</h2>
//       <SList items={cricketPlayers} />
//     </div>
//   );
// }

// export default SearchableList;

// import React, { useState } from 'react';

// const SList = ({ items }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredItems, setFilteredItems] = useState(items);

//   const handleSearchChange = (event) => {
//     const searchTerm = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
//     setSearchTerm(searchTerm);

//     const filteredList = items.filter((item) =>
//       item.toLowerCase().includes(searchTerm)
//     );
//     setFilteredItems(filteredList);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


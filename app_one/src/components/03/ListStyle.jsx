import React from 'react'

const ListStyle = ({liststyle}) =>
 {
  return (
    <div className='my-4  ' >
        <ul className=' border border-3 w-1/2 mx-auto '>
            <li className={liststyle} >list items </li>
            <li className={liststyle} >list items </li>
            <li className={liststyle} >list items </li>
            <li className={liststyle} >list items </li>
            <li className={liststyle} >list items </li>
        </ul>

    </div>
  )
}

export default ListStyle
import React from 'react'

const MouseEvents = () => {


  return (
    <div className=''  >
        <h3 className='w-1/2 mx-auto text-center' >mouse events</h3>

        <div className='w-1/2 h-24 mx-auto bg-red-300 p-4' onMouseOver={()=> console.log('mouse over event triggered')} 
        onMouseOut={()=>{console.log('on mouse out event triggered')}}
        onClick={(e)=>{console.log('onclick has be triggered ',e)}}
        onDoubleClick={()=>{console.log('double clicked done ')}}
        >
            here you can hover , click , dobble click

        </div>

        <div className='w-1/2 h-24 bg-blue-300 mx-auto my-4 p-4'>
            <input type="text" className='m-2' placeholder='enter text'
            onFocus={(e)=>{console.log('onfocus triggered')}}
            onBlur={()=>{console.log('on blurred triggered')}} />


        </div>
        <div className='w-1/2 bg-red-200 h-24 mx-auto p-4' >

        <p
        onCopy={()=>{alert('text copied')}}
        onCut={()=>alert('text cut ')}
        
        > text to be copied/cut </p>
        <input type="text" placeholder='paste the text here ' 
        onPaste={()=>alert('text pasted ')} />
        </div>
<div className=' bg-green-300 mx-auto w-1/2 h-24 my-4 p-4 ' >

        <MouseEventsChild propFunc={(propmsg)=>console.log(propmsg)}  propFuncMsg={'this is the prop msg '} ></MouseEventsChild>
</div>


        
        </div>
  )
}

export default MouseEvents



const MouseEventsChild = ({propFunc , propFuncMsg}) => {
function handleOnClick (){
  propFunc(propFuncMsg)
}
return ( <>
    <div>MouseEventsChild</div>
    <button onClick={handleOnClick} className=' bg-slate-800 text-white' > click to use prop msg in prop function </button>
  </>
  )
}

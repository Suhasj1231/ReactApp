import Parent from './components/02/Parent'
import Child from './components/02/Child'

import ListStyle from './components/03/ListStyle'
import MouseEvents from './components/04/MouseEvents'


const App = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center" >
          app one : revise the react.js concepts
        </h1>
        <hr className="my-4 "></hr>

        <Parent styleToChild={'border-solid border-4 border-sky-500 bg-red-400'} >
          <Child></Child>
        </Parent>


        <ListStyle liststyle={'list-decimal'} ></ListStyle>

        <MouseEvents></MouseEvents>



      </div>
    </>
  )
}
export default App

import Parent from './components/02/Parent'
import Child from './components/02/Child'

import ListStyle from './components/03/ListStyle'

import MouseEvents from './components/04/MouseEvents'
import Element from './components/04/Element'
import MyComponent from './components/04/MyComponent'

import DigClock from './components/05/DigClock'

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

        <MyComponent> <Element></Element> </MyComponent>

        <DigClock></DigClock>





      </div>
    </>
  )
}
export default App


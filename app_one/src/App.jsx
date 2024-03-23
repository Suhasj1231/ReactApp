import Child from "./components/two/Child"
import Parent from "./components/two/Parent"

const App = ()=> {
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

    

    </div>
    </>
  )
}
export default App

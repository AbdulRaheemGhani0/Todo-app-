import { useState } from "react"
export default function App() {
const [input, setInput] = useState()
const [array, setArray] = useState([])
 const addTodo =() => {
let  newArray = [...array]
newArray.push(input)
setArray(newArray)
 }
 const deleteTodo =(index) => {
    let  newArray = [...array]
    newArray.splice(index ,1)
    setArray(newArray)
     }






  return (
    <>
      <input type="text"  placeholder="enter your task"  value={input} onChange={(e) => {
        setInput(e.target.value)
      }}/>
      <button onClick={addTodo}>add task</button>
      <ul>

{array.map((index)=>{
    return(<>
<li key={index}>
{input}<button onClick={deleteTodo}>Delete</button></li>



    </>)
})}

      </ul>



    </>
  )
}

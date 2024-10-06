
import { useState } from 'react'
import './App.css'

function App() {
 const [input, setInput] = useState('');
   let [array, setArray] = useState([]);


const categorycreator = () => {





const inputFunction =()=>{
  let newArray = [...array]
 newArray.push(input) 

 setArray(newArray)

console.log("newarray",newArray,input)
};



  return (
    <>
    <div>
<input type="text"  placeholder='add category' value={input} onChange={(e)=>{setInput(e.target.value) }} />
<button onClick={inputFunction}>create</button>
</div>
      
    </>
  )

}


return(<>



</>


)
}


export default App

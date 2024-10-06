import { useState useEffect} from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState()



useEffect( async () => {

  let products = fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log("data", data));
setdata(products)
console.log("products" , products)








}, [])
console.log("products" , products)
console.log("data" , data)







console.log(data)
  return (
    <>
      <button>{count}</button>
    </>
  )
}

export default App
//     useEffect() => {async function () {
//   try {
//    let products= await fetch('https://dummyjson.com/products')
   

//   } catch (error) {
//     console.log(error);
    
//   }
  
// }}, [])
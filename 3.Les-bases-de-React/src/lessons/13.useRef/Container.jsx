import { useRef, useState } from "react"

  //1. Isoler une valeur parmi les mises a jour
  //2. Selectionner un element 
export default function Container() {

const[state, setState] = useState(0)
const countRef = useRef(0)
console.log(countRef);

function handleCountRef(){
  countRef.current++
}
const txtRef = useRef()
  return (
    <div>
      <button onClick={handleCountRef}>incremente la ref</button>
      <button onClick={() => setState(state + 1)}>incremente le state</button>
      <p>Valeur du state {state}</p>
      <p>Valeur de la ref {countRef.current}</p>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus recusandae laudantium, voluptates assumenda cumque natus non itaque maiores earum excepturi consectetur aperiam nam sunt distinctio quas ipsa sequi! Eum?</p>
    </div>
  )
}

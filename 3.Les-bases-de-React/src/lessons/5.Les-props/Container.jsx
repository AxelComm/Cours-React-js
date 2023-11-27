import { useState } from "react"
import Card from "./Card"

export default function Container() {

  const [state, setState] = useState("Hello World")
  const id = 17
  
  return (
    <div>
      <h1>Les props</h1>
      <p>State du container : {state}</p>
      <Card id={id} state={state} ChangeState={setState}></Card>
    </div>
  )
}

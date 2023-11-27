import "./Container.css"
import { useState, useRef } from "react";

export default function Container() {

  const [state, setState] = useState("")

  function handleInput(e){
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(emailRef.current.value);
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>


    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Votre pseudo ? </label>
      <input 
      onChange={handleInput}
      value={state}
      type="text" 
      id="name" />

      <label htmlFor="email">Entre votre email ? </label>
      <input 
      ref={emailRef}
      type="email" 
      id="email" />

      <button>Envoyer</button>
    </form>

    <p>Votre pseudo :{state} </p>

    </div>
  )
}

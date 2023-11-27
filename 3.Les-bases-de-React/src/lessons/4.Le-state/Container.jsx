import { useState } from "react"

export default function Container() {

  const [count, setCount] = useState(0)

  function handleClick() {
    //setCount(count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  return (
    <div>
      <button onClick={() => handleClick()}>incrementé</button>
      <p>{count}</p>
    </div>
  )
}

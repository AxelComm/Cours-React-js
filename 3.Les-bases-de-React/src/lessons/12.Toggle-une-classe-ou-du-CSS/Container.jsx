import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur note Mania</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusantium fugiat nostrum laboriosam vitae ad illo consequatur, veniam quae nisi maxime, harum ducimus nulla ab! Veniam est autem quos provident?</p>
      <p>{darkMode}</p>
      <button
      onClick={() => setDarkMode(!darkMode)}
      >Activer le {darkMode ? "light mode" : "Dark Mode"}</button>
    </div>
  )
}

import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./ListItem";

function App() {
  
  const [todoList, setTodoList] = useState([])

  const [todo, setTodo] = useState("")

    function deleteTodo(id) {
      setTodoList(todoList.filter(todo => todo.id !== id))
    }

    function handleSubmit(e) {
      e.preventDefault()

      setTodoList([...todoList, {id: nanoid(), content : todo}])
      setTodo("")
    }

    
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
      <h1 className="text-3xl font-bold text-slate-100 mb-4">Todo list TP-1</h1>

<form onSubmit={handleSubmit} className="mb-10" action="">
  
  <label htmlFor="todo" className="text-slate-50">Ajouter des choses a faire :</label>
  
  <input 
  value={todo}
  onChange={e => setTodo(e.target.value)}
  type="text" 
  required="required"
  className="mt-1 block w-full rounded" 
  id="todo" />
  
  <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>

</form>
    <ul>
      {todoList.length === 0 && (
        <li className="text-slate-50">Pas d'item a afficher...</li>
      )}
      {todoList.length > 0 &&

      (todoList.map(item => (
        <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
      )))

    }
    
    </ul>
      </div>
    </div>
  )
}

export default App

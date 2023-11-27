export default function Container() {

  const data = [
    {
      id: 1,
      name: "Axel"
    },
    {
      id: 2,
      name: "Julien"
    },
    {
      id: 3,
      name: "Paul"
    }
  ]
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.id}, {user.name} </li>
        ))}
        
      </ul>
    </div>
  )
}
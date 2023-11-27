
export default function Card({id, state , ChangeState}) {
  return (
    <div>Voici la Card , 
        {id},
        {state}
        <button onClick={() => ChangeState("Bonjour")}>Changer le state</button>
    </div>

  )
}
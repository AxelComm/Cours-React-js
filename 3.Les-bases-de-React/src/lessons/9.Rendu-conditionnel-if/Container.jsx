export default function Container() {
  
const isLogged = true

let content 

if (isLogged) content = "Bienvenue sur votre compte" 
else content = "Veuillez vous connecter"
  
return <div>
      <p>{content}</p>
</div>
}




  // mEHTODE 1
  //const isLogged = true

  //if (isLogged) {
  //return <div>
  //  <h1>Rendu conditionnel avec  if </h1>
  //  <p>Vous etes connecter</p>
  //</div>
  //}
  //else{
  //  return <div>
  //  <h1>Rendu conditionnel avec  if </h1>
  //  <p>Vous n'etes pas connecter</p>
  //</div>
  //}


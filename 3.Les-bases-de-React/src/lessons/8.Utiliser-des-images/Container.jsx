import fuji from "./assets/fuji.jpg"

export default function Container() {
console.log(fuji);
  return (
    <div>
      <h1>Utiliser des images</h1>

      <p>Image jpg/Png </p>
      <img src={fuji} alt="" />


      <p>Utiliser image dossier public </p>

      <img src={`/assets/forest-${1}.jpg`} alt="" />
    </div>
  )
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(data => {
    console.log(data);
    if (!data.ok) throw new Error(`Erreur ${data.status}`)
    return data.json()
})
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e);
})
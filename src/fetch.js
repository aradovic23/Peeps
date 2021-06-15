function getData(){
    return fetch('https://randomuser.me/api/?results=15 ')
    .then(res => res.json())
    .then(res => res.results)
}

export default getData
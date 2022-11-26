const Manager = require('./manager')
const manager = new Manager()

let user = {
    first_name: "Leo",
    last_name: "Messi",
    username: "Leo22",
    age: 35,
    email: "leo.messi@gmail.com"
}

let user2 = {
    first_name: "Matias",
    last_name: "Pepe",
    username: "Leo22",
    age: 35,
    email: "leo.messi@gmail.com"

}

manager.deleteById(2)
.then (result=> console.log(result))
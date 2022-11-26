const posts = [{
    title: 'Post One',
    body: 'This is the post one'
}, {
    title: 'Post Two',
    body: 'This is the post two'
}, ]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        }) 
        document.body.innerHTML = output
    }, 2000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post) 
            const error = true
            if(!error) {
                resolve()
            } else {
                reject('Error: Something went wrong!')
            }
        }, 2000)
    })
}
createPost({title: "Post Three", body: "This is the post three"})
.then(getPosts)
.catch(err => console.log(err)) 

console.log('La app continua su lógica....')

const pA = new Promise(function(resolve, reject) {
    //Hace algo asincrónico
    resolve('Resuelve al valor de A')
    // reject('Rechazo de A')
})

//el then es la forma de llamar a la promesa, así como las funciones se llaman con ()
//result sería lo que devuelve la promesa que lo puedo manipular
pA.then(function(result){
    console.log(result)
})

//pA.then().then().then(function(value) {console.log(value)}).then().then(function(value) {console.log(value)return {nombre: "Alex"}}).then(function(value) {console.log(value)})


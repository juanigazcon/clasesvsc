//Scheme. Tiene ID pero no lo doy yo
/* user = {
    first_name (string, required)
    last_name (string)
    username (string, required)
    age (number)
    mail (string, requires)
} */

const fs = require('fs');
const { stringify } = require('querystring');
const pathToFile = './users.json'

class Manager {
    
    createUser = async (user) => {
        //valida si todos los datos requeridos están siendo enviados
        if(!user.first_name || !user.username || !user.email){
            return {status: "Error", message:"Missing fields"}
        }
        try{
            //valido si el archivo existe o no
            //si no existe, id =  1
            if(fs.existsSync(pathToFile)){
                //leo todo en string, pero no lo puedo modificar
                let data = await fs.promises.readFile(pathToFile, 'utf-8');
                //transformo el string en json, lo puedo trabajar como array
                let users = JSON.parse(data)
                //me agarro el id del último usuario en el array
                if(users.length>0){
                let id = users[users.length-1].id
                user.id = id+1;
                users.push(user);
                await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2))
                return {status: "Success", Message: "User added"}
                }  else {
                    user.id=1
                    await fs.promises.writeFile(pathToFile, JSON.stringify([user], null, 2))
                    return{status: "Success", message:"User created"}
                }
            } else {
                user.id=1
                await fs.promises.writeFile(pathToFile, JSON.stringify([user], null, 2))
                return{status: "Success", message:"User created"}
            }
            
            
        } catch(err){
            return{status: "Error", message: err.message}
        }
    }

    findAll = async () => {
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            return {status:"Success", message: users}
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
    }


    findById = async(id) => {
            if(!id) return {status: "Error", message: "ID is required"}
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let users = JSON.parse(data)
                let selectedUser = users.find(user => user.id === id)
                if(selectedUser){
                return {status:"Success", message: selectedUser}
                } else {
                return {status: "Error", message:"User doesn´t exist"}
                }
            } else{
                return{status: "Error", message:"File doesn´t exist"}
            }
    }

    updateUser = async (id, updatedUser) => {
        if(!id) return {status: "Error", message: "ID is required"}
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let users = JSON.parse(data)
                let newUsers = users.map(user =>{
                    if(user.id === id){
                        return updatedUser
                    } else return user
                })
                await fs.promises.writeFile(pathToFile, JSON.stringify(newUsers, null, 2))
                return {status:"Success", message:"User updated successfully"}
            } else{
                return{status: "Error", message:"File doesn´t exist"}
            }

    }

    deleteAll = async () => {
        if(fs.existsSync(pathToFile)){
            //leo todo en string, pero no lo puedo modificar
            let data = await fs.promises.readFile(pathToFile, 'utf-8');
            //transformo el string en json, lo puedo trabajar como array
            let users = JSON.parse(data)
            users= []
            await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2))
            return {status: "Success", Message: "All users have been deleted"}
        } else {
            return{status: "Error", message:"File doesn´t exist"}
        }
    }

    deleteById = async(id) => {
        if(!id) return {status: "Error", message: "ID is required"}
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            let newUsers= users.filter((user) => user.id !== id)
            if(newUsers.length>0){
            await fs.promises.writeFile(pathToFile, JSON.stringify(newUsers, null, 2))
            return {status:"Success", message: "User successfully deleted"}
            } else {
            return {status: "Error", message:"User doesn´t exist"}
            }
        } else{
            return{status: "Error", message:"File doesn´t exist"}
        }
}



}

module.exports = Manager
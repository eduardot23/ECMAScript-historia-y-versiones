class User {
    //metodos

    greeting(){
        return "Buenas!"
    }

}

const t23 = new User()

console.log(t23.greeting());

const bebeloper = new User()
console.log(bebeloper.greeting());

//constructor



class usuario {
    //constructor
    constructor(){
        console.log("Nuevo Usuario")
    }

    greeting(){
        return "Buenas!"
    }
}

const eduardo = new usuario()

//this

class user {
    constructor(name){
        this.name = name
    }
    //metodos

    speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user("Ana")
console.log(ana.greeting());
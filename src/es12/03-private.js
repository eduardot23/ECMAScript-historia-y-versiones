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

// setters y getters

class user {
    constructor(name, age){
        this.name =name
        this.age = age
    }

    // "#" hace los metodos privados
    #speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}}`
    }
    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n
    }
}

const bebeloper1 = new user("David", 15)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 20);
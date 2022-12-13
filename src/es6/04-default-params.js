function newUser(name, age, country){
    var name = name || "Eduardo"
    var age = age || 19
    var country = country || "Mexico"
    console.log(name, age, country);
}

newUser()
newUser("David", 15, "Colombia")

function newAdmin(name = "Eduardo", age = 19, country = "Mexico"){
    console.log(name, age, country);
}

newAdmin()
newAdmin("Ana", 28, "Peru")
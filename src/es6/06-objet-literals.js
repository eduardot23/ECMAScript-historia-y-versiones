// enahced objet literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndx", 34, "Mexico", 1))
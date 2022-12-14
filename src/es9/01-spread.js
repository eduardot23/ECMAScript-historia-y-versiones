const user = {username: "t23", age: 19, country: "Mexico"}
const {username, ...values} = user

console.log(username);
console.log(values);
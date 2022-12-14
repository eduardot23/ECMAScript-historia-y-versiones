function* iterate(array){
    for (let value of array) {
        yield value
    }
}

const it = iterate(["Eduardo", "Oscar", "Ana", "David", "JuanDC"])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)


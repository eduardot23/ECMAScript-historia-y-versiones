//flat
const array = [0,1,2,3,4,5,6,[1,3,5,7,9,0, [2,4,6,8]]]
console.log(array.flat(3))

// flatmap

const array2 = [1,2,3,4,5]
console.log(array2.flatMap(v => [v, v * 2]))
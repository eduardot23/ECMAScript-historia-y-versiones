const regex = /\b(apple)+\b/g

const fruit = "apple,  apple, banana, kiwi, orange, etc"

for (const match of fruit.matchAll(regex)){
    console.log(match);
}
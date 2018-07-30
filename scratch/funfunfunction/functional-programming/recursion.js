let countDownFrom = (num) => {
    console.info(num)
    if (num > 0)
    countDownFrom(num - 1)
}
console.info("===Recursion example 1, counting from 10 to 0===")
countDownFrom(10)

// second example: sorting categories

let categories = [
    { id: "animals", "parent": null},
    { id: "mammals", "parent": "animals"},
    { id: "cats", "parent": "mammals"},
    { id: "dogs", "parent": "mammals"},
    { id: "chihuahua", "parent": "dogs"},
    { id: "labrador", "parent": "dogs"},
    { id: "persian", "parent": "cats"},
    { id: "siamese", "parent": "cats"},
]

const makeTrees = (categories, parent) => {
    let node = {}
    category = categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = 
            makeTrees(categories, c.id))
    return node
}

console.info("===Recursion example 2, sorting into categories===")
console.info(
    JSON.stringify(
        makeTrees(categories, null),
        null,
        4
    ))
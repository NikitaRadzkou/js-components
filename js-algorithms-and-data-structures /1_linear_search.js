const newArray =  [3, 5, 6, 10, 1, 7, 2]
let count = 0

function linearSearch(newArray, item) {
    for (let i = 0; i < newArray.length; i++) {
        count += 1
        if (newArray[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(newArray, 2))
console.log('count = ', count)
// O(n)

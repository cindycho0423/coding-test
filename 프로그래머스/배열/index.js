const arr = [...new Array(4)].map((_, i)=> new Array(4).fill(i))
console.log(arr)

const arr1 = [1, 2, 3];
console.log(arr1.unshift(7))

const array = [0, 1, 2, 3, 4];
array.splice(2, 0, 123)
console.log(array)

array.splice(1, 2, 456)
console.log(array)
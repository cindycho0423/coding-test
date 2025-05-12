const solution = (array) => {

    if(array.length < 2) return array;

    let center = array[0];
    let left = [];
    let right = [];
    
    for(let i = 1; i < array.length; i++){
        if(array[i] <= center) left.push(array[i]);
        else right.push(array[i])
    }

    let rArray = solution(right);
    let lArray = solution(left);
    
    return [...lArray, center, ...rArray];
}

console.log(solution([1, -5, 2, 4, 3]))
console.log(solution([2, 1, 1, 3, 2, 5, 4]))
console.log(solution([6, 1, 7]))

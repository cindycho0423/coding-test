function solution(year) {
    let answer = 0;
    if (year % 4 === 0 && (year % 100 !== 0 ||  year % 400 === 0)) answer = 1;
    
    return answer;
}

console.log(solution(2000));
console.log(solution(1999));

function solution(num){
    let score;
    if (num >= 90) score = 'A';
    else if (num >= 80) score = 'B';
    else if (num >= 70) score = 'C';
    else if (num >= 60) score = 'D';
    else score = 'E';

    return score;
}

console.log(solution(100));
console.log(solution(90));
console.log(solution(80));
console.log(solution(70));

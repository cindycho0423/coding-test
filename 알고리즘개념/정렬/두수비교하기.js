// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.
function solution(a, b) {
    if(a > b) return '>';
    else if (a < b) return '<';
    else return '==';
}

console.log(solution(1, 2))
console.log(solution(10, 2))
console.log(solution(5, 5))
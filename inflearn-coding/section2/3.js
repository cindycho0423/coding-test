function solution(a, b) {
  let answer = [];
  let rock = 2,
    scissor = 1,
    paper = 3;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push('D');
    } else if (
      (a[i] === rock && b[i] === scissor) ||
      (a[i] === scissor && b[i] === paper) ||
      (a[i] === paper && b[i] === rock)
    ) {
      answer.push('A');
    } else {
      answer.push('B');
    }
  }

  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

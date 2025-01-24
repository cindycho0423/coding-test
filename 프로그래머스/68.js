function solution(N) {
  let answer = 0;

  while (N > 0) {
    if (N % 2 === 0) {
      N /= 2;
    } else {
      N -= 1;
      answer++;
    }
  }

  return answer;
}

console.log(solution(5));

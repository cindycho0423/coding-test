// 세 수 중 최솟값
// 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
// (정렬을 사용하면 안됩니다.)
// 입력 설명: 첫 번째 줄에 100 이하의 세 자연수가 입력된다.
// 출력 설명: 첫 번째 줄에 가장 작은 수를 출력한다.
// 입력 예제: 6 5 11
// 출력 예제: 5

// -> 내가 쓴 답
function solution(a, b, c) {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
}

console.log(solution(2, 5, 1));

// -> 해설
function solution2(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution2(2, 5, 1));
